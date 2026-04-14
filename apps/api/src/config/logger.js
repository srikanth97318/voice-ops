import pino from "pino";
import { env } from "./env.js";

export const logger = pino({
  level: env.LOG_LEVEL,
  base: {
    service: "voiceops-agent",
    env: env.NODE_ENV,
  },
  timestamp: () => `,"time":"${new Date().toISOString()}"`,
});
``