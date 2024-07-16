const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');
const { userData, postData, commentData } = require('./userdata');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Post.bulkCreate(postData);

  await Comment.bulkCreate(commentData);

  process.exit(0);
};

seedDatabase();
