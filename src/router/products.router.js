const productsRouter = require('express').Router()

const productsController = require('../controller/products.controller')

productsRouter.get('/', productsController.listAll)

module.exports = productsRouter