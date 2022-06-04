const productsServices = require('../services/products.services')

const getAll = async (req, res, next) => {
    try {
        const products = await productsServices.getAll()
        res.status(200).json({
            data: products
        })
    } catch (error) {
        next(error)
    }
}

const create = async (req, res, next) => {
    try {
        const product = await productsServices.create(req.body)
        res.status(201).json({
            msg: 'Product successfully added',
            data: product
        })
    } catch (error) {
        next(error)
    }
}

/**
 * TODO: implementar resto de métodos
 */


module.exports = {
    getAll,
    create
}