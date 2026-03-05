export const type = "perplexity";
export const label = "Perplexity";

export const models = [
  { id: "llama-3.1-sonar-small-128k-online", label: "llama-3.1-sonar-small-128k-online" },
];

export const agentConfigurationDoc = `# perplexity agent configuration

Adapter: perplexity

Core fields:
- apiKey (string, required): Perplexity API key
- baseUrl (string, optional): API base URL (default: https://api.perplexity.ai)
- model (string, optional): Perplexity model to use
- temperature (number, optional): sampling temperature (default: 0.7)
- maxTokens (number, optional): max tokens to generate
- systemPrompt (string, optional): system prompt for the agent

Operational fields:
- timeoutSec (number, optional): request timeout in seconds (default: 120)
`;
