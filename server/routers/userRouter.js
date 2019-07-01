const router = require('express').Router()
const UserController = require('../controllers/user')

router.get('/',UserController.getAll)
router.get('/:userId',UserController.getOne)

module.exports = router