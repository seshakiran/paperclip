import type { AdapterExecutionContext, AdapterExecutionResult } from "@paperclipai/adapter-utils";
import { asNumber, asString } from "@paperclipai/adapter-utils/server-utils";

export async function execute(ctx: AdapterExecutionContext): Promise<AdapterExecutionResult> {
  const { config, context } = ctx;
  
  const apiKey = asString(config.apiKey, "");
  if (!apiKey) throw new Error("perplexity adapter missing apiKey");
  
  const baseUrl = asString(config.baseUrl, "https://api.perplexity.ai");
  const model = asString(config.model, "llama-3.1-sonar-small-128k-online");
  const temperature = asNumber(config.temperature, 0.7);
  const maxTokens = asNumber(config.maxTokens, 4096);
  const systemPrompt = asString(config.systemPrompt, "");
  const timeoutSec = asNumber(config.timeoutSec, 120);
  
  const userMessage = context.prompt ?? "Hello";
  
  const messages = [];
  if (systemPrompt) messages.push({ role: "system", content: systemPrompt });
  messages.push({ role: "user", content: userMessage });
  
  const requestBody = { model, messages, temperature, max_tokens: maxTokens };
  
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutSec * 1000);
  
  try {
    const url = `${baseUrl}/chat/completions`;
    
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${apiKey}` },
      body: JSON.stringify(requestBody),
      signal: controller.signal,
    });
    
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Perplexity API failed with status ${res.status}: ${errorText}`);
    }
    
    const data = await res.json() as Record<string, unknown>;
    
    let summary = "Perplexity API call completed";
    if (data.choices && Array.isArray(data.choices) && data.choices.length > 0) {
      const content = (data.choices[0] as Record<string, unknown>).message as Record<string, unknown>;
      summary = (content?.content as string)?.substring(0, 200) ?? "Perplexity API call completed";
    }
    
    return { exitCode: 0, signal: null, timedOut: false, summary };
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      return { exitCode: 1, signal: null, timedOut: true, summary: "Perplexity request timed out" };
    }
    throw error;
  } finally {
    clearTimeout(timer);
  }
}
