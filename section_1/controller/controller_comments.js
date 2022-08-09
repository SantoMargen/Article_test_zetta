const Comment = require("../models/comment")

class ControllerComment {
    static async createComment(req, res, next) {
        try {
            const { articleId } = req.params
            const { fullName, comment } = req.body
            const newComment = await Comment.create({ fullName, articleId, comment })
            let response = {
                statusCode: 201,
                statusResponse: "success",
                body: {
                    article: newComment
                }
            }
            res.status(201).json(response)
        } catch (error) {
            next(error)
        }
    }
    static async getAllCommetns(req, res, next) {
        try {
            let page = parseInt(req.query.page) || 0;
            let limit = parseInt(req.query.limit) || 10;
            let query = req.query
            Comment.find(query)
                .sort({ updateAt: "ASC" })
                .skip(page * limit)
                .populate("articleId", "-createdAt -updatedAt -__v -_id")
                .limit(limit)
                .exec((err, doc) => {
                    if (err) {
                        throw { name: "ERRROR_PAGINATION" }

                    }
                    Comment.countDocuments(query).exec((count_error, count) => {
                        if (count_error) {
                            throw { name: "ERRROR_COUNT" }
                        }
                        let totalPage = Math.ceil(count / doc.length);
                        let response = {
                            statusCode: 200,
                            statusResponse: "success",
                            body: {
                                data: {
                                    total: count,
                                    currentPage: page,
                                    totalPage,
                                    pageSize: doc.length,
                                    articles: doc
                                }
                            }
                        }
                        res.status(200).json(response)

                    });
                });


        } catch (error) {
            console.log(error);
            next(error)
        }
    }
    static async updateComment(req, res, next) {
        try {
            const { commentId } = req.params
            const { comment } = req.body
            const updateComment = await Comment.findByIdAndUpdate(
                { _id: commentId },
                { comment },
                { new: true, useFindAndModify: false }
            )
            if (!updateComment) {
                throw { name: "NOT_FOUND_COMMENT" };
            }
            let response = {
                statusCode: 200,
                statusResponse: "success",
                body: {
                    article: updateComment
                }
            }
            res.status(200).json(response)
        } catch (error) {
            next(error)
        }
    }
    static async deleteComment(req, res, next) {
        try {
            const { commentId } = req.params
            const deleteComment = await Comment.findByIdAndDelete({
                _id: commentId
            })
            if (!deleteComment) {
                throw { name: "NOT_FOUND_Comment" }
            }
            let response = {
                statusCode: 200,
                statusResponse: "success",
                body: {
                    message: "Comment has been deleted"
                }
            }
            res.status(200).json(response)
        } catch (error) {
            next(error)
        }
    }

}

module.exports = ControllerComment