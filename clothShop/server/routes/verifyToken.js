var jwt = require("jsonwebtoken");

// verify login
const verifyToken = (req, res, next) => {
  const headerToken = req.headers.token;
  // console.log("headerToken", headerToken);
  if (headerToken) {
    const token = headerToken.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      console.log("token:", token);
      console.log("user", user);
      if (err) res.status(403).json("Invalid token");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("Not authenticated");
  }
};
// verify login user === params.user
const VerifyLogin = (req, res, next) => {
  verifyToken(req, res, () => {
    console.log("req.user", req.body.userId);
    if (req.body.userId === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return res.status(403).json("You are not allowed to update!");
    }
  });
};

const VerifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return res.status(403).json("You are not admin");
    }
  });
};
module.exports = { verifyToken, VerifyLogin, VerifyAdmin };
