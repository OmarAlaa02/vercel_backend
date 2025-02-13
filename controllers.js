exports.handlePost = async (req, method) => {
  return JSON.stringify({ message: "welcome to vercel" });
};

exports.handleGet = async (req, method) => {
  return JSON.stringify({ message: "GET request captured" });
};
