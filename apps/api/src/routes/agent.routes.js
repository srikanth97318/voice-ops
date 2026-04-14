import { Router } from "express";
import { runAgent } from "../agent/orchestrator.js";

const router = Router();

router.post("/run", async (req, res, next) => {
  try {
    const result = await runAgent({
      input: req.body,
      metadata: {
        requestId: req.requestId,
        source: "agent",
      },
    });

    res.json(result);
  } catch (err) {
    next(err);
  }
});

export default router;
