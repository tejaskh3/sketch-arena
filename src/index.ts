import express from "express";
import { request } from "http";
const app = express();

app.use("/", (req, res) => {
  res.send("hi");
});
app.listen(5000);
