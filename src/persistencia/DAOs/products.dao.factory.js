const MemoryDAO = require('./products/products.dao.memory')
// TODO: agregar require de los Daos restantes

class ProductsFactoryDAO {
    static getPersistencia(database) {
        if (database === 'memoria') return MemoryDAO.getInstance()
        // TODO: agregar casos de persistencia restantes
    }
}

module.exports = ProductsFactoryDAO;