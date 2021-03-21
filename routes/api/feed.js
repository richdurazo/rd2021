const express = require('express');
const router = express.Router();

const feedController = require('../../controllers/feed');
// @route  GET api/feed
// @desc   test route
// access  public

router.get('/', (req, res) => res.send('feed route'));

// @route  GET api/feed/posts
// @desc   get all posts
// access  public

router.get('/posts', feedController.getPosts);

module.exports = router;