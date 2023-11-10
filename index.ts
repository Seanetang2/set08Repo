import express from "express";

const app = express();

const port: number = 3400;

const Server = app.listen(port, () => {
  console.log("Server is up and running", port);
});

process.on("uncaughtException", (err: Error) => {
  console.log("uncaughtException", err);
  process.exit(1);
});

process.on("unhandleRejectionHandle", (reason: any) => {
  console.log("unhandleRejectionHandle", reason);
  Server.close(() => {
    process.exit(1);
  });
});
