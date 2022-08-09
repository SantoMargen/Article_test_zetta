const Article = require("../models/article")

class ControllerArticle {
    static async createArticle(req, res, next) {
        try {
            const { title, content } = req.body
            const newArticle = await Article.create({ title, content })
            let response = {
                statusCode: 201,
                statusResponse: "success",
                body: {
                    article: newArticle
                }
            }
            res.status(201).json(response)
        } catch (error) {
            next(error)
        }
    }
    static async updateArticle(req, res, next) {
        try {
            const { title, content } = req.body
            const { id } = req.params
            const updatedArticle = await Article.findByIdAndUpdate(
                { _id: id },
                { title, content },
                { new: true, useFindAndModify: false }
            )

            if (!updatedArticle) {
                throw { name: "NOT_FOUND" };
            }
            let response = {
                statusCode: 200,
                statusResponse: "success",
                body: {
                    article: updatedArticle
                }
            }
            res.status(200).json(response)
        } catch (error) {
            next(error)
        }
    }
    static async deleteArticle(req, res, next) {
        try {
            const { id } = req.params
            const deleteArticle = await Article.findByIdAndDelete({
                _id: id
            })
            if (!deleteArticle) {
                throw { name: "NOT_FOUND_ARTICLE" }
            }
            let response = {
                statusCode: 200,
                statusResponse: "success",
                body: {
                    message: "Article has been deleted"
                }
            }
            res.status(200).json(response)
        } catch (error) {
            next(error)
        }
    }
}
module.exports = ControllerArticle