exports.handlePost = async (req, next) => {
  return JSON.stringify({ message: req.someKey });
};

exports.handleGet = async (req, next) => {
  throw new Error("Error message");
};
