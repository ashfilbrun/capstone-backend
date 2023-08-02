const { User } = require("../models");

// Find All Users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    // .populate('illness')
    if (!users) throw Error("User not found");
    res.status(200).json(users);
  } catch (e) {
    console.log(e);
    res.status(500).send("User not found");
  }
};

// Find User By ID
const findUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) throw Error("User not found");
    res.status(200).json(user);
  } catch (e) {
    console.log(e);
    res.status(500).send("User not found");
  }
};

// Find User By Username
const findUserByUsername = async (req, res) => {
  try {
    const username = req.params.username;
    const user = await User.find({ username: username });
    if (!user) throw Error("Username not found");
    res.status(200).json(user);
  } catch (e) {
    console.log(e);
    res.status(500).send("Username not found");
  }
};

// Find User By Email
const findUserByEmail = async (req, res) => {
  try {
    const email = req.params.email;
    const regex = new RegExp(email, "i"); // 'i' flag makes the search case-insensitive
    const user = await User.find({ email: regex });
    if (!email) throw Error("Email not found");
    res.status(200).json(email);
  } catch (e) {
    console.log(e);
    res.status(500).send("Email not found");
  }
};

// Create a New User
const createUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      username,
      birthDate,
      sex,
      illnessId,
    } = req.body;

    const existingUser = await User.findOne({ $or: [{ username }, { email }] });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Username or email already exists" });
    }

    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      username,
      birthDate,
      sex,
      illnessId,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (e) {
    console.log(e);
    res.status(500).send("User creation unsuccessful");
  }
};

// Update a User
const updateUserById = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      username,
      birthDate,
      sex,
      illness,
    } = req.body;
    const userId = req.params.id;
    console.log(userId);
    const user = await User.findById(userId);
    if (!user) {
      console.log(userId);
      return res.status(404).json({ message: `User not found` });
    }

    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.email = email || user.email;
    user.password = password || user.password;
    user.username = username || user.username;
    user.birthDate = birthDate || user.birthDate;
    user.sex = sex || user.sex;
    user.illnessId = illness || user.illnessId;

    const updatedUser = await user.save();
    res
      .status(200)
      .json({ message: "User updated successfully", user: updatedUser });
  } catch (e) {
    console.log(e);
    res.status(500).send("User updated unsuccessfully");
  }
};

// Delete a User
const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("User ID:", id);

    const deletedUser = await User.findByIdAndRemove(id);
    console.log("Deleted User:", deletedUser);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (e) {
    console.log("Error:", e);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  createUser,
  getUsers,
  findUserById,
  findUserByUsername,
  findUserByEmail,
  deleteUserById,
  updateUserById,
};
