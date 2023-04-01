const Post = require('../models/post');
const successHandler = require('../service/successHandler');
const errorHandler = require('../service/errorHandler');

const posts = {
  async getPosts(req, res) {
    const post = await Post.find();
    successHandler(res, post);
  },
  async createPosts(req, res) {
    try {
      const { body } = req;
      const { name, content, image, createdAt, likes } = body;
      const newPost = await Post.create({
        name,
        content,
        image,
        createdAt,
        likes,
      });
      successHandler(res, newPost);
    } catch (error) {
      errorHandler(res, error);
    }
  },
  async deletePost(req, res) {
    const id = req.params.id;
    const post = await Post.findByIdAndDelete(id);
    successHandler(res, post);
  },
  async deletePosts(req, res) {
    await Post.deleteMany({});
    successHandler(res, []);
  },
  async editPost(req, res) {
    try {
      const id = req.params.id;
      const { body } = req;
      const { name, content, image, createdAt, likes } = body;
      const post = await Post.findByIdAndUpdate(id, {
        $set: {
          name,
          content,
          image,
          createdAt,
          likes,
        },
      });
      successHandler(res, post);
    } catch (error) {
      errorHandler(res, error);
    }
  },
};

module.exports = posts;
