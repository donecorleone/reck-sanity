import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/sanity/schema";

export default defineConfig({
  name: "project-name",
  title: "Reck",
  projectId: "mcfpzhuk",
  dataset: "production",
  plugins: [
    structureTool({
      name: "content",
      title: "Inhalte",
      structure: (S) =>
        S.list()
          .title("Inhalte")
          .items([
            ...S.documentTypeListItems().filter(
              (listItem) =>
                !["slider", "hero", "info", "event", "artist"].includes(
                  listItem.getId() as string
                )
            ),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
