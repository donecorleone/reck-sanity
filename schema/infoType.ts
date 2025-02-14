import { defineField, defineType } from "sanity";

export const infoType = defineType({
  name: "info",
  title: "Info",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Interner Titel",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
    }),
    defineField({
      name: "infoText",
      title: "Info Text",
      type: "text",
    }),
    defineField({
      name: "cta",
      title: "CTA Text",
      type: "string",
    }),
    defineField({
      name: "infoImage",
      title: "Info Image",
      type: "image",
    }),
  ],
});
