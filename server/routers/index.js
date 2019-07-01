const router = require('express').Router()

const productRouter = require('./productRouter')
const userRouter = require('./userRouter')
const userController = require('../controller/userController')
const authentication = require('../middleware/authentication')
router.post('/signup', userController.signup)
router.post('/signin', userController.signin)

router.use('/users',userRouter)
router.use('/products',productRouter)

module.exports = router