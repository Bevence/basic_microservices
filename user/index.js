import express from "express";

const app = express();

const users = [
  {
    email: "user1@gmail.com",
    password: "user1",
  },
  {
    email: "user2@gmail.com",
    password: "user2",
  },
  {
    email: "user3@gmail.com",
    password: "user3",
  },
];

app.get("/get-users", (req, res) => {
  res.status(200).json(users);
});

app.post("/add-user", (req, res) => {
  const newUser = req.body;
  const allUsers = [newUser, ...users];
  res.status(200).json({ users: allUsers });
});

app.listen(8001, () => {
  console.log("User server listening in port 8001");
});
