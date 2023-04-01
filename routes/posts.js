var express = require('express');
var router = express.Router();
const PostControllers = require('../controllers/posts');

/* GET home page. */
router.get('/', PostControllers.getPosts);
router.post('/', PostControllers.createPosts);
router.delete('/', PostControllers.deletePosts);
router.delete('/:id', PostControllers.deletePost);
router.patch('/:id', PostControllers.editPost);

module.exports = router;
