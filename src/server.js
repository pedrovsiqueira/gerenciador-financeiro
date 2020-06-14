import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send();
});

app.listen(3001, () => {
  console.log("server running on port 3001");
});
