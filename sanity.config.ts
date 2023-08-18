import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";
import { myStructure } from "./sanity/structures/deskStructure";
// import { CONFIG } from "@/constains";
import { improvedPublishAction } from "./sanity/actions/improvedPublishAction";

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
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    actions: (prev) =>
      prev.map((originalAction) =>
        originalAction.action === "publish"
          ? improvedPublishAction(originalAction)
          : originalAction
      ),
  },
});
