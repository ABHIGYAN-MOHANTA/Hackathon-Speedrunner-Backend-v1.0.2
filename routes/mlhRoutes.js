const express = require('express')
const router = express.Router()
const mlhController = require('../controllers/mlhController')
const verifyJWT = require('../middleware/verifyJWT')

router.use(verifyJWT)

router.route('/')
    .get(mlhController.getAllPosts)

module.exports = router