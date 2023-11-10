import express from "express";

const app = express();

const port: number = 3400;

const Server = app.listen(port, () => {
  console.log("Server is up and running", port);
});
