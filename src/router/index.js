const router = require('express').Router()
router.use('/products', require('./products.router'))
router.use('/users', require('./users.router'))
module.exports = router