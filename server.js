const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let posts = []; // ✅ In-memory storage (resets when server restarts)

// Home - List all posts
app.get("/", (req, res) => {
  res.render("index", { posts });
});

// New Post Page
app.get("/new", (req, res) => {
  res.render("new");
});

// Handle New Post
app.post("/new", (req, res) => {
  const newPost = {
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    createdAt: new Date()
  };
  posts.push(newPost);
  res.redirect("/");
});

// Start Server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
