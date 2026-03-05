export const type = "minimax";
export const label = "Minimax";

export const models = [
  { id: "MiniMax-M2.1", label: "MiniMax-M2.1" },
];

export const agentConfigurationDoc = `# minimax agent configuration

Adapter: minimax

Core fields:
- apiKey (string, required): Minimax API key
- baseUrl (string, optional): API base URL (default: https://api.minimax.chat/v1)
- model (string, optional): Minimax model to use
- temperature (number, optional): sampling temperature (default: 0.7)
- maxTokens (number, optional): max tokens to generate
- systemPrompt (string, optional): system prompt for the agent

Operational fields:
- timeoutSec (number, optional): request timeout in seconds (default: 120)
`;
