import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const EnvSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  PORT: z.coerce.number().default(3000),

  LOG_LEVEL: z.enum(["debug", "info", "warn", "error"]).default("info"),

  VAPI_API_KEY: z.string().optional(),
  VAPI_WEBHOOK_SECRET: z.string(),

  QDRANT_URL: z.string().url(),
  QDRANT_API_KEY: z.string().optional(),

  LLM_PROVIDER: z.enum(["openai", "azure", "groq", "anthropic"]),
  LLM_API_KEY: z.string(),
});

const parsed = EnvSchema.safeParse(process.env);

if (!parsed.success) {
  console.error(parsed.error.flatten().fieldErrors);
  process.exit(1);
}

export const env = parsed.data;
``