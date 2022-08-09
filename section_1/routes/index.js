const express = require("express")
const errorHandler = require("../middlewwares/error_handler")
const routes = express.Router()
const article = require("./article_route")
const commants = require("./comment_route")

routes.use("/", article)
routes.use("/", commants)
routes.use(errorHandler)

module.exports = routes