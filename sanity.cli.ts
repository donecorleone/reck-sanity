import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "mcfpzhuk",
    dataset: "production",
  },
  project: {
    basePath: "/studio", // If hosting on a subpath
  },
});
