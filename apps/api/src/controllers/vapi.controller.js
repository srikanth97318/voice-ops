import { runAgent } from "../agent/orchestrator.js";

export async function handleVapiWebhook(req, res, next) {
  try {
    const result = await runAgent({
      input: req.body,
      metadata: {
        requestId: req.requestId,
        source: "vapi",
      },
    });

    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
}
