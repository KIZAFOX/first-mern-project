const router = require('express').Router()
const postController = require('../controllers/post.controller.js')

router.get('/', postController.getPosts)
router.post('/', postController.addPost)

router.get('/post/:id', postController.getPost)

router.get('/search/:query', postController.searchPost)

module.exports = router