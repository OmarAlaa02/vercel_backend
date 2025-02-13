const express = require("express");
const jwt = require("jsonwebtoken");


const app = express();

app.use(express.json());

app.get("/getToken", async (req, res, next) => {
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
});

app.post("/checkToken", (req, res, next) => {
  const { token } = req.body;
  if(!token)
  {
    console.log('token not caught');
    const error = new Error('no token given');
    error.statusCode = 403;
    return next(error);   
  }
  try{
    
    const decodedToken = jwt.verify(token,'somesecret');
    res.json(decodedToken);

  }catch(err)
  {
    const error = new Error('error decoding token');
    error.statusCode = 403;
    return next(error);
  }

  
});

app.use((error, req, res, next) => {
  const {statusCode , message} = error;
  res.send(JSON.stringify({ status: statusCode ,message : message}));
});

app.listen(3000, () => console.log("listening on 3000"));
