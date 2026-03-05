import type { AdapterEnvironmentCheck, AdapterEnvironmentTestContext, AdapterEnvironmentTestResult } from "@paperclipai/adapter-utils";

function summarizeStatus(checks: AdapterEnvironmentCheck[]): AdapterEnvironmentTestResult["status"] {
  if (checks.some((check) => check.level === "error")) return "fail";
  if (checks.some((check) => check.level === "warn")) return "warn";
  return "pass";
}

export async function testEnvironment(ctx: AdapterEnvironmentTestContext): Promise<AdapterEnvironmentTestResult> {
  const checks: AdapterEnvironmentCheck[] = [];
  const config = ctx.config as Record<string, unknown>;
  const apiKey = typeof config.apiKey === "string" ? config.apiKey : "";
  const baseUrl = typeof config.baseUrl === "string" ? config.baseUrl : "https://api.groq.com/openai/v1";

  if (!apiKey) {
    checks.push({ code: "groq_api_key_missing", level: "error", message: "Groq adapter requires an API key.", hint: "Set adapterConfig.apiKey to your Groq API key." });
    return { adapterType: ctx.adapterType, status: summarizeStatus(checks), checks, testedAt: new Date().toISOString() };
  }

  checks.push({ code: "groq_api_key_configured", level: "info", message: "Groq API key is configured." });

  try { new URL(baseUrl); checks.push({ code: "groq_base_url_valid", level: "info", message: `Groq base URL: ${baseUrl}` }); }
  catch { checks.push({ code: "groq_base_url_invalid", level: "error", message: `Invalid base URL: ${baseUrl}` }); }

  const model = typeof config.model === "string" ? config.model : "";
  if (model) checks.push({ code: "groq_model_configured", level: "info", message: `Groq model: ${model}` });
  else checks.push({ code: "groq_model_default", level: "info", message: "Using default model: llama-3.3-70b-versatile" });

  return { adapterType: ctx.adapterType, status: summarizeStatus(checks), checks, testedAt: new Date().toISOString() };
}
