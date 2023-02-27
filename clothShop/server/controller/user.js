const User = require("../models/User");
const bcrypt = require("bcrypt");

///////////////////////////////////  get status  ////////////////////////////////////
exports.getStats = async (req, res) => {
  console.log("lastYear");

  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  console.log("lastYear", lastYear);
  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } }, //only user created in 1 year
      {
        $project: {
          month: { $month: "$createdAt" }, //pick the month of createdAt
        },
      },
      {
        $group: {
          _id: "$month", //group the users by month
          total: { $sum: 1 },
        },
      },
    ]);
    // console.log("userStat", data);
    res.status(200).json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
};

///////////////////////////////////  get all users  ////////////////////////////////////
exports.getAllUsers = async (req, res) => {
  const latest = req.query.new;
  try {
    const users = latest
      ? await User.find().sort({ _id: -1 }).limit(5) // latest new user
      : await User.find();
    // console.log("users", users);

    res.status(200).json(users);
  } catch (err) {
    return res.status(500).json(err);
  }
};

///////////////////////////////////  get a user  ////////////////////////////////////
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    // console.log("user to find:", user);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    return res.status(500).json(err);
  }
};

///////////////////////////////////  update a user  ////////////////////////////////////

exports.updateUser = async (req, res) => {
  // user try to change password
  console.log("updateUser", req.body);
  if (req.body.password) {
    try {
      req.body.password = await bcrypt.hash(req.body.password, 10);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  // change other info
  try {
    const findone = await User.findById(req.params.id);
    console.log("findone", findone);
    console.log("req.body", req.body);

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true } //{ new : true } will return the modified document rather than the original
    );

    console.log("updatedUser", updatedUser);

    return res.status(200).json(updatedUser);
  } catch (err) {
    return res.status(500).json(err);
  }
};

///////////////////////////////////  del a user  ////////////////////////////////////

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("Account has been deleted");
  } catch (err) {
    return res.status(500).json(err);
  }
};
