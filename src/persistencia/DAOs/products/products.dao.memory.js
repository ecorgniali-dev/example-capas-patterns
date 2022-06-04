const IDao = require('../IDao')

let productMemoryInstance = null;

class ProductsMemoryDAO extends IDao {
    constructor(){
        super()
        this.products = []
    }

    // singleton
    static getInstance() {
        if (!productMemoryInstance) {
            productMemoryInstance = new ProductsMemoryDAO()
        }
        return productMemoryInstance;
    }

    getAll() {
        return this.products
    }

    create(data) {
        this.products.push(data)
        return this.products[this.products.length - 1]
    }

    /**
     * TODO: implementar resto de métodos
     */

}

module.exports = ProductsMemoryDAO;