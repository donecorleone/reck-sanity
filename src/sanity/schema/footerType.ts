import {defineField, defineType} from 'sanity'

export const footerType = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'headline',
      type: 'string',
    }),
    defineField({
        name: 'company',
        title: 'Company',
        type: 'array',
        of: [{ type: 'string' }],
      }),
      defineField({
        name: 'headline2',
        type: 'string',
      }),
      defineField({
          name: 'info',
          title: 'Info',
          type: 'array',
          of: [{ type: 'string' }],
        }),
        defineField({
            name: 'headline3',
            type: 'string',
          }),
        defineField({
            name: 'links',
            title: 'Links',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  defineField({
                    name: 'title',
                    title: 'Link Title',
                    type: 'string',
                  }),
                  defineField({
                    name: 'url',
                    title: 'URL',
                    type: 'url',
                  }),
                ],
                preview: {
                  select: {
                    title: 'title',
                    subtitle: 'url',
                  },
                },
              },
            ],
          }),
    defineField({
      name: 'headline4',
      type: 'string'
    }),      
   
    defineField({
      name: 'socialImage',
      title: 'Social Image',
      type: 'image',
    }),
  ],
})