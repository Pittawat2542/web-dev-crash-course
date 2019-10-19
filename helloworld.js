// const path = require("path");
// const fs = require("fs");

// const helper = require("./utils/helper");

// console.log("Hello World");
// console.log(helper.add(10, 5));
// // console.log(path.dirname("helper.js"));
// console.log(__dirname);
// console.log(path.join(__dirname, "uploads"));

// fs.writeFileSync(
//     path.join(__dirname, "text.txt"),
//     "Hello World"
//     );

const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const userRoute = require("./routes/users");

const app = express();

const viewPath = path.join(__dirname, "public", "views");

app.set("view engine", "ejs");
app.set("views", viewPath);

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (req, res) => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(result => res.json(result.data))
    .catch(err => console.log(err));
});

app.use("/users", userRoute);

app.listen(3000, () => console.log("Server started!"));