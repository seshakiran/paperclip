export const type = "zai";
export const label = "Z.ai";

export const models = [
  { id: "qwen2.5-72b-instruct", label: "qwen2.5-72b-instruct" },
];

export const agentConfigurationDoc = `# zai agent configuration

Adapter: zai

Core fields:
- apiKey (string, required): Z.ai API key
- baseUrl (string, optional): API base URL (default: https://api.z.ai/v1)
- model (string, optional): Z.ai model to use
- temperature (number, optional): sampling temperature (default: 0.7)
- maxTokens (number, optional): max tokens to generate
- systemPrompt (string, optional): system prompt for the agent

Operational fields:
- timeoutSec (number, optional): request timeout in seconds (default: 120)
`;
