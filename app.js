const express = require("express");
const path = require("path");
const cors = require("cors");
const routes = require("./routes");
const MongoClient = require("./mongo/mongo");
const bodyParser = require("body-parser");
const jwt = require("./auth/jwt");
const errorHandler = require("./errors/error_handler");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use("/", routes);
// app.use("/users", require("./users/users.controller"));

// global error handler
app.use(errorHandler);

const app = express();
// Set the default views directory to html folder
app.set("views", path.join(__dirname, "html"));

server = app.listen(process.env.PORT || 7777, () => {
  console.log("Server is running at localhost:7777");
});
