const app = require("express")();

app.get("/", (req, res) => {
  res.status(200).send();
});

app.get("/users", (req, res) => {
  const users = [{ name: "John Doe", email: "john@mail.com" }];
  res.status(200).json(users);
});

app.post("/users", (req, res) => {
  const user = {
    name: "Pedro Siqueira",
    email: "pedrosiqueira@gmail.com",
  };
  res.status(201).json(user)
});

module.exports = app;
