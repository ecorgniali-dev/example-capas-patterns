const handlerError = (err, req, res, next) => {
    console.log(err)
    // normalize error
    if (!err.status) {
        err.status = 500
        err.message = 'Internal Server Error'
    }
    res.status(err.status).json({ error: err.message })
}

module.exports = {
    handlerError
}