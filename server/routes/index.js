const route = require('express').Router()
const UserController = require('../Controller/UserController')
const CartRouter = require('./CartRouter')
const AdminRouter = require('./AdminRouter')

route.post('/register', UserController.register)
route.post('/login', UserController.login)

route.use('/products', AdminRouter)
 
route.use('/cart', CartRouter)

module.exports = route