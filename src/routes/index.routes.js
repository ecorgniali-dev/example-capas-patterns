const express = require('express')
const router = express.Router()
const productsRoutes = require('./products.routes')

router.use('/api/productos', productsRoutes)

module.exports = router;