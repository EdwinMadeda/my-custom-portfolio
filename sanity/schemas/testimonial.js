import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'about',
      title: 'About',
      type: 'object',
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
          description: 'e.g Country, Position',
          type: 'string',
        }),
        defineField({
          name: 'content',
          title: 'Content',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'msg',
      title: 'Message',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'avatar',
    },
  },
})
