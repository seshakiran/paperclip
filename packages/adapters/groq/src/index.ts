export const type = "groq";
export const label = "Groq";

export const models = [
  { id: "llama-3.3-70b-versatile", label: "llama-3.3-70b-versatile" },
];

export const agentConfigurationDoc = `# groq agent configuration

Adapter: groq

Core fields:
- apiKey (string, required): Groq API key
- baseUrl (string, optional): API base URL (default: https://api.groq.com/openai/v1)
- model (string, optional): Groq model to use
- temperature (number, optional): sampling temperature (default: 0.7)
- maxTokens (number, optional): max tokens to generate
- systemPrompt (string, optional): system prompt for the agent

Operational fields:
- timeoutSec (number, optional): request timeout in seconds (default: 120)
`;
