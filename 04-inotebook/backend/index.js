// import { connectToMongo } from "./db.js";
const connectToMongo = require("./db");
const express = require("express");
// import routes from "./routes/auth.js";

// Connect to mongoDB
connectToMongo();

const app = express();
const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World! UDIT");
// });

// Routing from other files
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

// Listen on the port
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
