const router = require('express').Router()
const productController = require('../controller/productController')
const { authentication } = require('../middlewares/authentication')

router.use(authentication)
router.get('/', productController.getProducts)

module.exports = router
