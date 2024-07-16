const { User } = require('../models'); // Adjust the import path based on your project structure

const userController = {
  // Example function to get all users
  getAllUsers: async (req, res) => {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (err) {
      console.error('Error fetching users:', err);
      res.status(500).json({ error: 'Error fetching users' });
    }
  },

  // Example function to create a new user
  createUser: async (req, res) => {
    const { username, email, password } = req.body;
    try {
      const newUser = await User.create({ username, email, password });
      res.status(201).json(newUser);
    } catch (err) {
      console.error('Error creating user:', err);
      res.status(500).json({ error: 'Error creating user' });
    }
  },

  // Add more controller functions as needed (update, delete, etc.)
};

module.exports = userController;
