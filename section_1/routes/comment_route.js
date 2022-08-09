const express = require("express")
const ControllerComment = require("../controller/controller_comments")
const route = express.Router()

route.post("/comments/:articleId", ControllerComment.createComment)
route.get("/comments", ControllerComment.getAllCommetns)
route.put("/comments/:commentId", ControllerComment.updateComment)
route.delete("/comments/:commentId", ControllerComment.deleteComment)


module.exports = route