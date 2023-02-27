const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    const result = await newUser.save();
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
  }
};

exports.passwordLogin = (req, res) => {
  console.log("req.body", req.body);
  User.findOne({ username: req.body.username })
    .then((user) => {
      console.log("user password", user.password);
      console.log("body password", req.body.password);

      if (!user) return res.status(400).json("user not found");
      bcrypt.compare(req.body.password, user.password).then((is_valid) => {
        console.log("is_valid", is_valid);

        if (!is_valid) return res.status(400).json("wrong password");
        console.log(" is_valid", is_valid);
        const { password, ...others } = user._doc;
        console.log(" password others", user._doc);

        var token = jwt.sign(
          {
            userId: user._id,
            isAdmin: user.isAdmin,
          },
          process.env.JWT_SEC,
          { expiresIn: "20h" }
        );
        console.log("others", others);
        res.status(200).json({ others, token });
      });
    })
    .catch((err) => console.log(err));
};
