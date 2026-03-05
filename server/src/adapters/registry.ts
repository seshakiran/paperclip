import type { ServerAdapterModule } from "./types.js";
import {
  execute as claudeExecute,
  testEnvironment as claudeTestEnvironment,
  sessionCodec as claudeSessionCodec,
} from "@paperclipai/adapter-claude-local/server";
import { agentConfigurationDoc as claudeAgentConfigurationDoc, models as claudeModels } from "@paperclipai/adapter-claude-local";
import {
  execute as codexExecute,
  testEnvironment as codexTestEnvironment,
  sessionCodec as codexSessionCodec,
} from "@paperclipai/adapter-codex-local/server";
import { agentConfigurationDoc as codexAgentConfigurationDoc, models as codexModels } from "@paperclipai/adapter-codex-local";
import {
  execute as cursorExecute,
  testEnvironment as cursorTestEnvironment,
  sessionCodec as cursorSessionCodec,
} from "@paperclipai/adapter-cursor-local/server";
import { agentConfigurationDoc as cursorAgentConfigurationDoc, models as cursorModels } from "@paperclipai/adapter-cursor-local";
import {
  execute as opencodeExecute,
  testEnvironment as opencodeTestEnvironment,
  sessionCodec as opencodeSessionCodec,
} from "@paperclipai/adapter-opencode-local/server";
import { agentConfigurationDoc as opencodeAgentConfigurationDoc, models as opencodeModels } from "@paperclipai/adapter-opencode-local";
import {
  execute as openclawExecute,
  testEnvironment as openclawTestEnvironment,
} from "@paperclipai/adapter-openclaw/server";
import {
  agentConfigurationDoc as openclawAgentConfigurationDoc,
  models as openclawModels,
} from "@paperclipai/adapter-openclaw";
// New API-based adapters
import {
  execute as minimaxExecute,
  testEnvironment as minimaxTestEnvironment,
} from "@paperclipai/adapter-minimax/server";
import {
  agentConfigurationDoc as minimaxAgentConfigurationDoc,
  models as minimaxModels,
} from "@paperclipai/adapter-minimax";
import {
  execute as zaiExecute,
  testEnvironment as zaiTestEnvironment,
} from "@paperclipai/adapter-zai/server";
import {
  agentConfigurationDoc as zaiAgentConfigurationDoc,
  models as zaiModels,
} from "@paperclipai/adapter-zai";
import {
  execute as groqExecute,
  testEnvironment as groqTestEnvironment,
} from "@paperclipai/adapter-groq/server";
import {
  agentConfigurationDoc as groqAgentConfigurationDoc,
  models as groqModels,
} from "@paperclipai/adapter-groq";
import {
  execute as deepseekExecute,
  testEnvironment as deepseekTestEnvironment,
} from "@paperclipai/adapter-deepseek/server";
import {
  agentConfigurationDoc as deepseekAgentConfigurationDoc,
  models as deepseekModels,
} from "@paperclipai/adapter-deepseek";
import {
  execute as perplexityExecute,
  testEnvironment as perplexityTestEnvironment,
} from "@paperclipai/adapter-perplexity/server";
import {
  agentConfigurationDoc as perplexityAgentConfigurationDoc,
  models as perplexityModels,
} from "@paperclipai/adapter-perplexity";
import {
  execute as togetherExecute,
  testEnvironment as togetherTestEnvironment,
} from "@paperclipai/adapter-together/server";
import {
  agentConfigurationDoc as togetherAgentConfigurationDoc,
  models as togetherModels,
} from "@paperclipai/adapter-together";
import { listCodexModels } from "./codex-models.js";
import { listCursorModels } from "./cursor-models.js";
import { processAdapter } from "./process/index.js";
import { httpAdapter } from "./http/index.js";

const claudeLocalAdapter: ServerAdapterModule = {
  type: "claude_local",
  execute: claudeExecute,
  testEnvironment: claudeTestEnvironment,
  sessionCodec: claudeSessionCodec,
  models: claudeModels,
  supportsLocalAgentJwt: true,
  agentConfigurationDoc: claudeAgentConfigurationDoc,
};

const codexLocalAdapter: ServerAdapterModule = {
  type: "codex_local",
  execute: codexExecute,
  testEnvironment: codexTestEnvironment,
  sessionCodec: codexSessionCodec,
  models: codexModels,
  listModels: listCodexModels,
  supportsLocalAgentJwt: true,
  agentConfigurationDoc: codexAgentConfigurationDoc,
};

const opencodeLocalAdapter: ServerAdapterModule = {
  type: "opencode_local",
  execute: opencodeExecute,
  testEnvironment: opencodeTestEnvironment,
  sessionCodec: opencodeSessionCodec,
  models: opencodeModels,
  supportsLocalAgentJwt: true,
  agentConfigurationDoc: opencodeAgentConfigurationDoc,
};

const cursorLocalAdapter: ServerAdapterModule = {
  type: "cursor",
  execute: cursorExecute,
  testEnvironment: cursorTestEnvironment,
  sessionCodec: cursorSessionCodec,
  models: cursorModels,
  listModels: listCursorModels,
  supportsLocalAgentJwt: true,
  agentConfigurationDoc: cursorAgentConfigurationDoc,
};

const openclawAdapter: ServerAdapterModule = {
  type: "openclaw",
  execute: openclawExecute,
  testEnvironment: openclawTestEnvironment,
  models: openclawModels,
  supportsLocalAgentJwt: false,
  agentConfigurationDoc: openclawAgentConfigurationDoc,
};

// New API-based adapters
const minimaxAdapter: ServerAdapterModule = {
  type: "minimax",
  execute: minimaxExecute,
  testEnvironment: minimaxTestEnvironment,
  models: minimaxModels,
  supportsLocalAgentJwt: false,
  agentConfigurationDoc: minimaxAgentConfigurationDoc,
};

const zaiAdapter: ServerAdapterModule = {
  type: "zai",
  execute: zaiExecute,
  testEnvironment: zaiTestEnvironment,
  models: zaiModels,
  supportsLocalAgentJwt: false,
  agentConfigurationDoc: zaiAgentConfigurationDoc,
};

const groqAdapter: ServerAdapterModule = {
  type: "groq",
  execute: groqExecute,
  testEnvironment: groqTestEnvironment,
  models: groqModels,
  supportsLocalAgentJwt: false,
  agentConfigurationDoc: groqAgentConfigurationDoc,
};

const deepseekAdapter: ServerAdapterModule = {
  type: "deepseek",
  execute: deepseekExecute,
  testEnvironment: deepseekTestEnvironment,
  models: deepseekModels,
  supportsLocalAgentJwt: false,
  agentConfigurationDoc: deepseekAgentConfigurationDoc,
};

const perplexityAdapter: ServerAdapterModule = {
  type: "perplexity",
  execute: perplexityExecute,
  testEnvironment: perplexityTestEnvironment,
  models: perplexityModels,
  supportsLocalAgentJwt: false,
  agentConfigurationDoc: perplexityAgentConfigurationDoc,
};

const togetherAdapter: ServerAdapterModule = {
  type: "together",
  execute: togetherExecute,
  testEnvironment: togetherTestEnvironment,
  models: togetherModels,
  supportsLocalAgentJwt: false,
  agentConfigurationDoc: togetherAgentConfigurationDoc,
};

const adaptersByType = new Map<string, ServerAdapterModule>(
  [
    claudeLocalAdapter,
    codexLocalAdapter,
    opencodeLocalAdapter,
    cursorLocalAdapter,
    openclawAdapter,
    minimaxAdapter,
    zaiAdapter,
    groqAdapter,
    deepseekAdapter,
    perplexityAdapter,
    togetherAdapter,
    processAdapter,
    httpAdapter,
  ].map((a) => [a.type, a]),
);

export function getServerAdapter(type: string): ServerAdapterModule {
  const adapter = adaptersByType.get(type);
  if (!adapter) {
    // Fall back to process adapter for unknown types
    return processAdapter;
  }
  return adapter;
}

export async function listAdapterModels(type: string): Promise<{ id: string; label: string }[]> {
  const adapter = adaptersByType.get(type);
  if (!adapter) return [];
  if (adapter.listModels) {
    const discovered = await adapter.listModels();
    if (discovered.length > 0) return discovered;
  }
  return adapter.models ?? [];
}

export function listServerAdapters(): ServerAdapterModule[] {
  return Array.from(adaptersByType.values());
}

export function findServerAdapter(type: string): ServerAdapterModule | null {
  return adaptersByType.get(type) ?? null;
}
