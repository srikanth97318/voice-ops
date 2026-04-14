import { logger } from "../config/logger.js";

export function errorMiddleware(err, req, res, _next) {
  logger.error(
    {
      err,
      requestId: req.requestId,
      path: req.path,
      method: req.method,
    },
    err.message
  );

  res.status(err.statusCode || 500).json({
    error: err.message || "Internal Server Error",
    requestId: req.requestId,
  });
}
``