require('dotenv').config()

module.exports = {
    PORT: process.env.PORT || 8080,
    PERSISTENCIA: process.env.PERSISTENCIA || 'memoria'
}