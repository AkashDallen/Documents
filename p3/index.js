const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const handlers = require("./controller/bookCartHandlers");

const app = express();

app.use(cors());
app.use(bodyParser());

app.get("/", (req, res, next) => {
  res.send("hello world");
});

app.get("/book", handlers.getBooks);
app.get("/book/:isbn", handlers.getBook);
app.post("/book", handlers.createBook);
app.put("/book/:isbn", handlers.updateBook);
app.delete("/book/:isbn", handlers.deleteBook);

mongoose
  .connect("mongodb://127.0.0.1:27017/bookdb")
  .then((d) => {
    app.listen(4000, () => {
      console.log("Server listening at port: 4000");
    });
  })
  .catch((err) => {
    console.log("ERROR: " + err);
  });
