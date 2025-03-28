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
                ![
                  "header",
                  "slider",
                  "info",
                  "event",
                  "artist",
                  "page",
                  "post",
                  "hero",
                  "service",
                ].includes(listItem.getId() as string)
            ),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
