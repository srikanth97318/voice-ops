import { Router } from "express";

import vapiRoutes from "./vapi.routes.js";
import taskRoutes from "./task.routes.js";
import agentRoutes from "./agent.routes.js";

const router = Router();

router.use("/vapi", vapiRoutes);
router.use("/tasks", taskRoutes);
router.use("/agent", agentRoutes);

export default router;
``
