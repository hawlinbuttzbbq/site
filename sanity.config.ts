import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";
import { myStructure } from "./sanity/structures/deskStructure";
import { codeInput } from "@sanity/code-input";
import { media, mediaAssetSource } from "sanity-plugin-media";
// import { CONFIG } from "@/constains";
import { createImprovedAction } from "./sanity/actions/createImprovedAction";

export default defineConfig({
  name: "default",
  title: "HawlinButtzBbq",

  projectId: "m6geqkpr",
  dataset: "production",
  basePath: "/admin",
  useCdn: false, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content

  plugins: [
    deskTool({
      structure: myStructure,
    }),
    visionTool(),
    codeInput(),
    // Media Library manager. uncomment the line below to activate
    // media(),
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    actions: (prev) =>
      prev.map((originalAction) =>
        originalAction.action === "publish"
          ? createImprovedAction(originalAction)
          : originalAction
      ),
  },
});
