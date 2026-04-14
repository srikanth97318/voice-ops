import express from "express";
import cors from "cors";
import morgan from "morgan";

import routes from "./routes/index.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";
import { requestIdMiddleware } from "./middlewares/requestId.middleware.js";

export function createApp() {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(requestIdMiddleware);
  app.use(morgan("dev"));

  app.use("/api", routes);

  app.get("/health", (_req, res) => {
    res.json({
      status: "ok",
      service: "voiceops-agent",
      timestamp: new Date().toISOString(),
    });
  });

  app.use(errorMiddleware);

  return app;
}
