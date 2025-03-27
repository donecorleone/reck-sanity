import { defineField, defineType } from "sanity";

export const heroType = defineType({
  name: "testimonial",
  title: "Teistimonial",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Interner Titel",
      type: "string",
    }),
    defineField({
      name: "kunde",
      title: "Kunde",
      type: "string",
    }),
    defineField({
      name: "firma",
      title: "Firma",
      type: "string",
    }),
    defineField({
      name: "rezession",
      title: "Rezession",
      type: "string",
    }),
    defineField({
      name: "kundenImage",
      title: "Kunden Bild",
      type: "image",
    }),
  ],
});
