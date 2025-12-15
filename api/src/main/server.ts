import express from "express";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { Env } from "./config/env";
import { appRouter } from "./config/app";

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }
  next();
});

app.use(
  "/trpc",
  createExpressMiddleware({
    router: appRouter,
  })
);

app.listen(Env.port, () => {
  console.log(`Server listening on port ${Env.port}`);
});
