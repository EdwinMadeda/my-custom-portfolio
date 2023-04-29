import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
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
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'techStack',
      title: 'Tech Stack',
      description: 'Technologies Used',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'projectLink',
      title: 'Project Link',
      type: 'string',
    }),
    defineField({
      name: 'codeLink',
      title: 'Code Link',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'thumbnail',
    },
  },
})
