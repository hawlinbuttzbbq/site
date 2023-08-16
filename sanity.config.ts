import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";
import { myStructure } from "./sanity/deskStructure";

export default defineConfig({
  name: "default",
  title: "HawlinButtzBbqTest",

  projectId: "yx0g88in",
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
