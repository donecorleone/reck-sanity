import { defineField, defineType } from "sanity";

export default defineType({
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Seitentitel",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "sections",
      title: "Bausteine",
      type: "array",
      of: [
        {
          name: "heroSection",
          type: "reference",
          to: [{ type: "hero" }],
          title: "Hero-Baustein",
        },
        {
          name: "infoSection",
          type: "reference",
          to: [{ type: "info" }],
          title: "Info-Baustein",
        },
        {
          name: "serviceSection",
          type: "reference",
          to: [{ type: "service" }],
          title: "Service-Baustein",
        },
        {
          name: "categorySection",
          type: "reference",
          to: [{ type: "category" }],
          title: "Kategorie-Baustein",
        },
      ],
    }),
  ],
});
