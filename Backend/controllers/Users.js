const User = require('../models/Users');
const asyncWrapper = require('../middleware/async');

/* USER CRUD OPERATION */
// GET ALL USERS
const getAllUsers = asyncWrapper(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({ users });
});

// GET SPECIFIC USER
const getUser = asyncWrapper(async (req, res, next) => {
  try {
    const { id: userID } = req.params;
    const user = await User.findOne({ _id: userID });

    if (!user) {
      return res.status(404).json({
        msg: `No user with id: ${userID}`
      });
    }

    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
});

// CREATE A NEW USER
const createUser = asyncWrapper(async (req, res, next) => {
  console.log(req.body);
  const users = await User.create(req.body);
  res.status(200).json({ users });
});

// UPDATE USER DETAILS
const updateUser = async (req, res, next) => {
  try {
    const { id: userID } = req.params;
    const user = await User.findOneAndUpdate({
      _id: userID
    }, req.body, {
      new: true,
      runValidators: true
    });

    if (!user) {
      return res.status(404).json({
        msg: `No User with id: ${userID}`
      });
    }

    console.log('UPDATE USER DETAILS \n\n\t\t' + user);
    res.status(200).json({ user });
  } catch (err) {
    res.status(500)
      .json({ msg: err });
    console.log(err);
  }
};

// DELETE USER
const deleteUser = asyncWrapper(async (req, res, next) => {
  try {
    const { id: userID } = req.params;
    const user = await User.findOneAndDelete({
      _id: userID
    });

    if (!user) {
      return res.status(404).json({
        msg: `No User with id: ${userID}`
      });
    }

    console.log('DELETE SPECIFIC USER INFO');
    res.status(200).json({ user });
  } catch (err) {
    res.status(500)
      .json({ msg: err });
    console.log(err);
  }
});

module.exports = { getAllUsers, createUser, getUser, updateUser, deleteUser };
