const usersRouter = require('express').Router()
const usersController = require('../controller/users.controller')
usersRouter.get('/', usersController.listAll)
module.exports = usersRouter