const express = require("express")
const ControllerArticle = require("../controller/controller_articles")
const route = express.Router()

route.post("/articles", ControllerArticle.createArticle)
route.put("/articles/:id", ControllerArticle.updateArticle)
route.delete("/articles/:id", ControllerArticle.deleteArticle)




module.exports = route