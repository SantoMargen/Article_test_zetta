const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
        },
        articleId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Article",
            required: true,
        },
        comment: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            default: 'Active'
        }
    },
    { timestamps: true }
)

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;