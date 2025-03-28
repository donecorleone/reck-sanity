import { defineField, defineType } from "sanity";

export const categoryType = defineType({
  name: "category",
  title: "Kategorie",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "imgUrl",
      title: "Kategorie Image",
      type: "image",
      options: {
        hotspot: true,
      },
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
      name: "leistung",
      title: "Leistungsübersicht",
      type: "array",
      of: [
        defineField({
          type: "object",
          name: "leistungsKategorie",
          fields: [
            defineField({
              name: "titel",
              type: "string",
              title: "Titel",
            }),
            defineField({
              name: "unterpunkte",
              type: "array",
              title: "Unterpunkte",
              of: [{ type: "string" }],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "categoryBody",
      title: "Body",
      type: "blockContent",
    }),
    defineField({
      name: "categoryLogos",
      title: "Kategorie Logo",
      type: "array",
      of: [{ type: "image" }],
    }),
  ],
});
