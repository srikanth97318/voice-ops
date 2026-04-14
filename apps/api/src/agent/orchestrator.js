import { perceive } from "./loop/perceive.js";
import { buildState } from "./loop/buildState.js";
import { decideIntent } from "./loop/decideIntent.js";
import { plan } from "./loop/plan.js";
import { act } from "./loop/act.js";
import { reflect } from "./loop/reflect.js";
import { respond } from "./loop/respond.js";
import { isIntentAllowed } from "./policies/safety.policy.js";
import { createLatencyBudget } from "../voice/latencyBudget.js";

export async function runAgent({ input, metadata }) {
  const budget = createLatencyBudget();

  const perception = await perceive(input, metadata);
  const state = await buildState(perception);

  const intent = await decideIntent(state);
  if (!isIntentAllowed(intent)) {
    return {
      text: "I can’t help with that request.",
      confidence: 0.2,
      requestId: metadata.requestId,
    };
  }

  if (budget.exceeded()) {
    return {
      text: "One moment please.",
      confidence: 0.3,
      requestId: metadata.requestId,
    };
  }

  const planResult = await plan(state, intent);
  const actionResult = await act(state, planResult);
  const reflection = await reflect(state, actionResult);

  return respond(state, actionResult, reflection);
}