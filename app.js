const express = require("express");
const path = require("path");
const routes = require("./routes");
const MongoClient = require("./mongo");

const app = express();
// Set the default views directory to html folder
app.set("views", path.join(__dirname, "html"));

// Set the folder for css & java scripts
app.use(express.static(path.join(__dirname, "css")));
app.use(express.static(path.join(__dirname, "node_modules")));

// Set the view engine to ejs
app.set("view engine", "ejs");

app.use("/", routes);

server = app.listen(process.env.PORT || 7777, () => {
  console.log("Server is running at localhost:7777");
});
