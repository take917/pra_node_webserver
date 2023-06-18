const express = require("express");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// app.get("/", function (req, res) {
//   res.send("<h1>TOP Page</h1>");
// });

app.post("/app/v1/quiz", function (req, res) {
  const answer = req.body.answer;
  if (answer === "2") {
    res.redirect("/correct.html");
  } else {
    res.redirect("/wrong.html");
  }
  // res.send(answer);
});

app.get("/about", function (req, res) {
  res.send("about Page");
});

app.listen(3000, () => {
  console.log("I'm running!");
});
