# VoiceOps Agent

This project includes a backend agent API and a React frontend dashboard.

## Run without webhook

The webhook is optional. You can use the direct agent route instead:

- `POST /api/agent/run`

Example payload:

```bash
curl -X POST http://localhost:3000/api/agent/run \
  -H "Content-Type: application/json" \
  -d '{"transcript":"Create a task to review code"}'
```

This sends the request directly to the agent orchestrator and bypasses the VAPI webhook.

## When webhook is required

The webhook endpoint is only needed if you want to receive events from VAPI:

- `POST /api/vapi/webhook`

It requires `VAPI_WEBHOOK_SECRET` and the matching `x-vapi-signature` header.

## Environment

Use `apps/api/.env` with these keys:

```env
NODE_ENV=development
PORT=3000
LOG_LEVEL=info

VAPI_API_KEY=your-vapi-api-key
VAPI_WEBHOOK_SECRET=your-vapi-webhook-secret

QDRANT_URL=http://localhost:6333
QDRANT_API_KEY=

LLM_PROVIDER=openai
LLM_API_KEY=your-openai-api-key
```

If you do not need webhook support, you can omit `VAPI_API_KEY` and `VAPI_WEBHOOK_SECRET` in local testing.

