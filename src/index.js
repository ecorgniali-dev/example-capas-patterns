const express = require('express')
const app = express()
const middlewares = require('./middlewares/middlewares')
const config = require('./config')
const indexRoutes = require('./routes/index.routes')

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/', indexRoutes)

// handlerErrors
app.use(middlewares.handlerError)

// express server
const server = app.listen(config.PORT, () => {
    console.log('Persistencia: ' + config.PERSISTENCIA);
    console.log(`Server listening on http://localhost:${server.address().port} with pid ${process.pid}`);
    if (config.PERSISTENCIA === 'mongodb') {
        conectarMongo(config.mongodbRemote.cnxStr)
            .then(() => console.log('Mongoose conectado!'))
            .catch(err => console.log(`Error al conectar mongo: ${err.message}`))
    }
});
server.on("error", error => console.log(`Error: ${error}`));