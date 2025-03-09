import { defineField, defineType } from "sanity";

export const headerType = defineType({
  name: "header",
  title: "Header",
  type: "document",
  fields: [
    defineField({
      name: "marquee",
      title: "Marquee Text",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  preview: {
    select: {
      title: "title", // oder eine andere Eigenschaft, falls vorhanden
    },
    prepare(selection) {
      return {
        title: "Marquee-Text", // Fester Titel für die Vorschau
      };
    },
  },
});
