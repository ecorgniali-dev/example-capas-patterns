const express = require('express')
const router = express.Router()
const productsController = require('../controllers/products.controller')

router.get('/', productsController.getAll)
router.post('/', productsController.create)
/**
 * TODO: agregar los demás endpoints
 */

module.exports = router