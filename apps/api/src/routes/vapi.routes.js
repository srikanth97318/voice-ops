import { Router } from "express";
import { handleVapiWebhook } from "../controllers/vapi.controller.js";
import { vapiAuthMiddleware } from "../middlewares/vapiAuth.middleware.js";

const router = Router();

router.post("/webhook", vapiAuthMiddleware, handleVapiWebhook);

export default router;
``