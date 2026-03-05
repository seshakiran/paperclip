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
  const baseUrl = typeof config.baseUrl === "string" ? config.baseUrl : "https://api.deepseek.com";

  if (!apiKey) {
    checks.push({ code: "deepseek_api_key_missing", level: "error", message: "DeepSeek adapter requires an API key.", hint: "Set adapterConfig.apiKey to your DeepSeek API key." });
    return { adapterType: ctx.adapterType, status: summarizeStatus(checks), checks, testedAt: new Date().toISOString() };
  }

  checks.push({ code: "deepseek_api_key_configured", level: "info", message: "DeepSeek API key is configured." });

  try { new URL(baseUrl); checks.push({ code: "deepseek_base_url_valid", level: "info", message: `DeepSeek base URL: ${baseUrl}` }); }
  catch { checks.push({ code: "deepseek_base_url_invalid", level: "error", message: `Invalid base URL: ${baseUrl}` }); }

  const model = typeof config.model === "string" ? config.model : "";
  if (model) checks.push({ code: "deepseek_model_configured", level: "info", message: `DeepSeek model: ${model}` });
  else checks.push({ code: "deepseek_model_default", level: "info", message: "Using default model: deepseek-chat" });

  return { adapterType: ctx.adapterType, status: summarizeStatus(checks), checks, testedAt: new Date().toISOString() };
}
