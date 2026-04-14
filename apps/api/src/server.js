import http from "http";
import { createApp } from "./app.js";
import { env } from "./config/env.js";

const app = createApp();
const server = http.createServer(app);

server.listen(env.PORT, () => {
  console.log(`🚀 VoiceOps Agent API running on port ${env.PORT}`);
});
