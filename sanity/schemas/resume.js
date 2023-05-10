import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'resume',
  title: 'Resume',
  type: 'document',
  fields: [
    defineField({
      name: 'resume',
      title: 'Resume',
      description: 'Upload a file most preferably of type pdf',
      type: 'file',
      accept:
        '.pdf,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      fields: [
        defineField({
          name: 'identifier',
          title: 'Identifier',
          description: 'e.g Web Developer Resume (required)',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'name',
          title: 'Name',
          type: 'string',
          description: 'Will be visible on download',
          initialValue: 'Edwin_Madeda_Resume',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Description',
          description: 'optionally mention something about the resume (also required)',
          type: 'text',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'resume.identifier',
    },
  },
})
