import crypto from "crypto";
import { env } from "../config/env.js";

export function vapiAuthMiddleware(req, res, next) {
  const signature = req.headers["x-vapi-signature"];
  if (!signature) {
    return res.status(401).json({ error: "Missing signature" });
  }

  const payload = JSON.stringify(req.body);
  const expected = crypto
    .createHmac("sha256", env.VAPI_WEBHOOK_SECRET)
    .update(payload)
    .digest("hex");

  if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) {
    return res.status(401).json({ error: "Invalid signature" });
  }

  next();
}
``