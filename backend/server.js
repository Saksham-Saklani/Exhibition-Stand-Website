const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDb = require("./db");
const contactRouter = require("./contact.route");

const app = express();
const PORT = process.env.PORT;

app.use(
  cors({
    origin: `${process.env.FRONTEND_URL}`,
    credentials: true,
  }),
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello backend!");
});

app.use("/api", contactRouter);

connectDb();


app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
