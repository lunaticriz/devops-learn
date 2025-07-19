import express from "express";
import { createConnection } from "typeorm";

const app = express();
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("API is running");
});

createConnection().then(() => {
  app.listen(3000, () => console.log("Server running on port 3000"));
});
