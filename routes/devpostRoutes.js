const express = require('express')
const router = express.Router()
const devpostController = require('../controllers/devpostController')
const verifyJWT = require('../middleware/verifyJWT')

router.use(verifyJWT)

router.route('/')
    .get(devpostController.getAllPosts)

module.exports = router