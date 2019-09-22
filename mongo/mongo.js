const MongoClient = require("mongodb").MongoClient;
const dbName = "jdp_users";
const config = require("../env.json");

const localMongoAddress = config.connectionString;
const herokuMongoAddress = process.env.MONGODB_URI;
let mongoAddress;

// Connect to the db
herokuMongoAddress
  ? (mongoAddress = herokuMongoAddress)
  : (mongoAddress = localMongoAddress);

MongoClient.connect(mongoAddress, function(err, client) {
  if (err) throw err;
  console.log("Connected to Mongo sucessfully");
  const db = client.db(dbName);
  client.close();
});

module.exports = MongoClient;
