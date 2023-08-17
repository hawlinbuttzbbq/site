import { CONFIG } from "@/constains";
import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: CONFIG.projectId,
    dataset: "production",
  },
});
