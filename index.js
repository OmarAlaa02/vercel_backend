const express = require("express");
const jwt = require("jsonwebtoken");

const authRouter = require("./routes/auth");

const app = express();
app.use(express.json());

app.use("/auth", authRouter);

app.use((error, req, res, next) => {
  const { statusCode, message } = error;
  res.send(JSON.stringify({ status: statusCode, message: message }));
});

app.listen(3000, () => console.log("listening on 3000"));
