import type { CLIAdapterModule } from "@paperclipai/adapter-utils";
import { printClaudeStreamEvent } from "@paperclipai/adapter-claude-local/cli";
import { printCodexStreamEvent } from "@paperclipai/adapter-codex-local/cli";
import { printCursorStreamEvent } from "@paperclipai/adapter-cursor-local/cli";
import { printOpenCodeStreamEvent } from "@paperclipai/adapter-opencode-local/cli";
import { printOpenClawStreamEvent } from "@paperclipai/adapter-openclaw/cli";
// New API-based adapters
import { printStreamEvent as printMinimaxStreamEvent } from "@paperclipai/adapter-minimax/cli";
import { printStreamEvent as printZaiStreamEvent } from "@paperclipai/adapter-zai/cli";
import { printStreamEvent as printGroqStreamEvent } from "@paperclipai/adapter-groq/cli";
import { printStreamEvent as printDeepseekStreamEvent } from "@paperclipai/adapter-deepseek/cli";
import { printStreamEvent as printPerplexityStreamEvent } from "@paperclipai/adapter-perplexity/cli";
import { printStreamEvent as printTogetherStreamEvent } from "@paperclipai/adapter-together/cli";
import { processCLIAdapter } from "./process/index.js";
import { httpCLIAdapter } from "./http/index.js";

const claudeLocalCLIAdapter: CLIAdapterModule = {
  type: "claude_local",
  formatStdoutEvent: printClaudeStreamEvent,
};

const codexLocalCLIAdapter: CLIAdapterModule = {
  type: "codex_local",
  formatStdoutEvent: printCodexStreamEvent,
};

const opencodeLocalCLIAdapter: CLIAdapterModule = {
  type: "opencode_local",
  formatStdoutEvent: printOpenCodeStreamEvent,
};

const cursorLocalCLIAdapter: CLIAdapterModule = {
  type: "cursor",
  formatStdoutEvent: printCursorStreamEvent,
};

const openclawCLIAdapter: CLIAdapterModule = {
  type: "openclaw",
  formatStdoutEvent: printOpenClawStreamEvent,
};

// New API-based CLI adapters
const minimaxCLIAdapter: CLIAdapterModule = {
  type: "minimax",
  formatStdoutEvent: printMinimaxStreamEvent,
};

const zaiCLIAdapter: CLIAdapterModule = {
  type: "zai",
  formatStdoutEvent: printZaiStreamEvent,
};

const groqCLIAdapter: CLIAdapterModule = {
  type: "groq",
  formatStdoutEvent: printGroqStreamEvent,
};

const deepseekCLIAdapter: CLIAdapterModule = {
  type: "deepseek",
  formatStdoutEvent: printDeepseekStreamEvent,
};

const perplexityCLIAdapter: CLIAdapterModule = {
  type: "perplexity",
  formatStdoutEvent: printPerplexityStreamEvent,
};

const togetherCLIAdapter: CLIAdapterModule = {
  type: "together",
  formatStdoutEvent: printTogetherStreamEvent,
};

const adaptersByType = new Map<string, CLIAdapterModule>(
  [
    claudeLocalCLIAdapter,
    codexLocalCLIAdapter,
    opencodeLocalCLIAdapter,
    cursorLocalCLIAdapter,
    openclawCLIAdapter,
    minimaxCLIAdapter,
    zaiCLIAdapter,
    groqCLIAdapter,
    deepseekCLIAdapter,
    perplexityCLIAdapter,
    togetherCLIAdapter,
    processCLIAdapter,
    httpCLIAdapter,
  ].map((a) => [a.type, a]),
);

export function getCLIAdapter(type: string): CLIAdapterModule {
  return adaptersByType.get(type) ?? processCLIAdapter;
}
