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
  const baseUrl = typeof config.baseUrl === "string" ? config.baseUrl : "https://api.z.ai/v1";

  if (!apiKey) {
    checks.push({ code: "zai_api_key_missing", level: "error", message: "Z.ai adapter requires an API key.", hint: "Set adapterConfig.apiKey to your Z.ai API key." });
    return { adapterType: ctx.adapterType, status: summarizeStatus(checks), checks, testedAt: new Date().toISOString() };
  }

  checks.push({ code: "zai_api_key_configured", level: "info", message: "Z.ai API key is configured." });

  try { new URL(baseUrl); checks.push({ code: "zai_base_url_valid", level: "info", message: `Z.ai base URL: ${baseUrl}` }); }
  catch { checks.push({ code: "zai_base_url_invalid", level: "error", message: `Invalid base URL: ${baseUrl}` }); }

  const model = typeof config.model === "string" ? config.model : "";
  if (model) checks.push({ code: "zai_model_configured", level: "info", message: `Z.ai model: ${model}` });
  else checks.push({ code: "zai_model_default", level: "info", message: "Using default model: qwen2.5-72b-instruct" });

  return { adapterType: ctx.adapterType, status: summarizeStatus(checks), checks, testedAt: new Date().toISOString() };
}
