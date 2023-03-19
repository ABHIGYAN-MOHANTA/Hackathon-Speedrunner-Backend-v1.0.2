const express = require('express')
const router = express.Router()
const upload = require("../middleware/multer");
const postsController = require('../controllers/postsController')
const verifyJWT = require('../middleware/verifyJWT')

router.use(verifyJWT)

router.route('/')
    .get(postsController.getAllPosts)
    .post(upload.single("file"),postsController.createNewPost)
    .patch(postsController.updatePost)
    .delete(postsController.deletePost)

module.exports = router