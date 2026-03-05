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
  const baseUrl = typeof config.baseUrl === "string" ? config.baseUrl : "https://api.together.ai/v1";

  if (!apiKey) {
    checks.push({ code: "together_api_key_missing", level: "error", message: "Together AI adapter requires an API key.", hint: "Set adapterConfig.apiKey to your Together AI API key." });
    return { adapterType: ctx.adapterType, status: summarizeStatus(checks), checks, testedAt: new Date().toISOString() };
  }

  checks.push({ code: "together_api_key_configured", level: "info", message: "Together AI API key is configured." });

  try { new URL(baseUrl); checks.push({ code: "together_base_url_valid", level: "info", message: `Together AI base URL: ${baseUrl}` }); }
  catch { checks.push({ code: "together_base_url_invalid", level: "error", message: `Invalid base URL: ${baseUrl}` }); }

  const model = typeof config.model === "string" ? config.model : "";
  if (model) checks.push({ code: "together_model_configured", level: "info", message: `Together AI model: ${model}` });
  else checks.push({ code: "together_model_default", level: "info", message: "Using default model: meta-llama/Llama-3.3-70B-Instruct" });

  return { adapterType: ctx.adapterType, status: summarizeStatus(checks), checks, testedAt: new Date().toISOString() };
}
