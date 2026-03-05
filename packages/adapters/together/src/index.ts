export const type = "together";
export const label = "Together AI";

export const models = [
  { id: "meta-llama/Llama-3.3-70B-Instruct", label: "meta-llama/Llama-3.3-70B-Instruct" },
];

export const agentConfigurationDoc = `# together agent configuration

Adapter: together

Core fields:
- apiKey (string, required): Together AI API key
- baseUrl (string, optional): API base URL (default: https://api.together.ai/v1)
- model (string, optional): Together AI model to use
- temperature (number, optional): sampling temperature (default: 0.7)
- maxTokens (number, optional): max tokens to generate
- systemPrompt (string, optional): system prompt for the agent

Operational fields:
- timeoutSec (number, optional): request timeout in seconds (default: 120)
`;
