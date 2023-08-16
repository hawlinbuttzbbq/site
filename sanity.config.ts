import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";
import { myStructure } from "./sanity/deskStructure";

export default defineConfig({
  name: "default",
  title: "HawlinButtzBbq",

  projectId: "m6geqkpr",
  dataset: "production",
  basePath: "/admin",

  plugins: [
    deskTool({
      structure: myStructure,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
