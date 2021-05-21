
const express = require('express')
const routerB = require('./routerB')

const server = express()

server.use((request, response, next) => {
  console.log('middleware a nivel de aplicación')
  next()
})

server.use('/b', routerB)

server.get('/', (request, response, next) => {
  console.log('middleware a nivel de ruta')
  next()
}, (request, response) => {
  response.json({ message: 'API Middleware' })
})

server.get('/a', (request, response) => {
  response.json({ message: 'ruta a' })
})

server.listen(8080, () => {
  console.log('Server listening')
})

// Middlewares 3 niveles (Funciones)
// - Nivel de aplicación o servidor
// - Nivel router
// - Nivel de ruta
