import type { ServerAdapterModule } from "@paperclipai/adapter-utils";
import { execute } from "./execute.js";
import { testEnvironment } from "./test.js";
import { agentConfigurationDoc, models } from "../index.js";

export const groqAdapter: ServerAdapterModule = {
  type: "groq",
  execute,
  testEnvironment,
  models,
  supportsLocalAgentJwt: false,
  agentConfigurationDoc,
};

export { execute, testEnvironment };
