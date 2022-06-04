const config = require('../config')
const ProductsDAO = require('../persistencia/DAOs/products.dao.factory').getPersistencia(config.PERSISTENCIA)

const getAll = async () => {
    const products = await ProductsDAO.getAll()
    return products
}

const create = async (product) => {
    const newProduct = await ProductsDAO.create(product)
    return newProduct
}

/**
 * TODO: implementar resto de métodos
 */


module.exports = {
    getAll,
    create
}