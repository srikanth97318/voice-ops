import { buildResponse } from "../policies/response.policy.js";
import { calculateSuccess } from "../../evals/successMetrics.js";

export function respond(state, results, reflection) {
  const response = buildResponse(reflection);

  return {
    ...response,
    success: calculateSuccess({
      intent: state.intent,
      results,
    }),
    requestId: state.metadata.requestId,
  };
}