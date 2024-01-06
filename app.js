require("dotenv").config();
const express = require("express");
const connectToDB = require("./db");
const CRUD_route = require("./routes/CRUD_route");

try {
  const app = express();
  app.use(express.json());
  connectToDB();
  app.use("/api", CRUD_route);
  app.listen(process.env.PORT, () => console.log("server is up"));
} catch (error) {
  console.log("problem in starting server");
}
