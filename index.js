const express = require("express");
const { handlePost, handleGet } = require("./controllers");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  res.send(await handleGet);
});

app.post("/", async (req, res) => {
  res.send(await handlePost(req, "post"));
});

app.listen(3000, () => console.log("listening on 3000"));
