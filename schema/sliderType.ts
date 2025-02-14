import { defineField, defineType } from "sanity";

export const sliderType = defineType({
  name: "slider",
  title: "Slider",
  type: "document",
  fields: [
    defineField({
      name: "sliderImage",
      title: "Slider Image",
      type: "image",
    }),
    defineField({
      name: "sliderImage2",
      title: "Slider Image 2",
      type: "image",
    }),
    defineField({
      name: "sliderImage3",
      title: "Slider Image 3",
      type: "image",
    }),
    defineField({
      name: "sliderImage4",
      title: "Slider Image 4",
      type: "image",
    }),
    defineField({
      name: "sliderImage5",
      title: "Slider Image 5",
      type: "image",
    }),
  ],
});
