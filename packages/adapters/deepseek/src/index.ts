export const type = "deepseek";
export const label = "DeepSeek";

export const models = [
  { id: "deepseek-chat", label: "deepseek-chat" },
];

export const agentConfigurationDoc = `# deepseek agent configuration

Adapter: deepseek

Core fields:
- apiKey (string, required): DeepSeek API key
- baseUrl (string, optional): API base URL (default: https://api.deepseek.com)
- model (string, optional): DeepSeek model to use
- temperature (number, optional): sampling temperature (default: 0.7)
- maxTokens (number, optional): max tokens to generate
- systemPrompt (string, optional): system prompt for the agent

Operational fields:
- timeoutSec (number, optional): request timeout in seconds (default: 120)
`;
