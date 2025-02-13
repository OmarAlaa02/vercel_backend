const jwt = require("jsonwebtoken");
exports.checkToken = (req, res, next) => {
  const { token } = req.body;
  if (!token) {
    console.log("token not caught");
    const error = new Error("no token given");
    error.statusCode = 403;
    return next(error);
  }
  try {
    const decodedToken = jwt.verify(token, "somesecret");
    res.json(decodedToken);
  } catch (err) {
    const error = new Error("error decoding token");
    error.statusCode = 403;
    return next(error);
  }
};

exports.getToken = (req, res, next) => {
  const token = jwt.sign(
    {
      email: "o.alaa51003@gmail.com",
      username: "omar",
    },
    "somesecret",
    {
      expiresIn: "1h",
    }
  );

  res.json({ token });
};
