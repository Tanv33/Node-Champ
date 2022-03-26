const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("./config/db");
const routes = require("./routes");

const app = express();

const port = process.env.PORT || 5000;

const db = mongoose.connection;
db.on("error", console.error.bind("connection error"));
db.on("open", () => {
  console.log("db connected");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("short"));
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// Routes
app.use("/api/v1", routes);

app.get("/", (req, res) => {
  return res.status(200).send("Hello World");
});

app.listen(port, () => {
  console.log(`Your sv is running on http://localhost:${port}`);
});
