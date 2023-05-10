import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'portfolio',
  title: 'Porfolio',
  type: 'document',
  fields: [
    defineField({
      name: 'introduction',
      title: 'Introduction',
      type: 'object',
      fields: [
        defineField({
          name: 'role',
          title: 'Role',
          description: "i.e Specialisation e.g I'm a Front-End Developer",
          type: 'text',
        }),
        defineField({
          name: 'briefDescription',
          title: 'Brief Description',
          description: 'What I do',
          type: 'array',
          of: [
            {
              title: 'Block',
              type: 'block',
              styles: [{title: 'Normal', value: 'normal'}],
              lists: [],
              marks: {
                decorators: [
                  {title: 'Strong', value: 'strong'},
                  {title: 'Emphasis', value: 'em'},
                  {title: 'Highlight', value: 'highlight'},
                ],
              },
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'about',
      title: 'About',
      description: 'Bio',
      type: 'object',
      fields: [
        defineField({
          name: 'snippet',
          title: 'Snippet',
          type: 'array',
          of: [
            {
              title: 'Block',
              type: 'block',
              styles: [{title: 'Normal', value: 'normal'}],
              lists: [],
            },
          ],
        }),
        defineField({
          name: 'content',
          title: 'Content',
          type: 'array',
          of: [
            {
              title: 'Block',
              type: 'block',
              styles: [{title: 'Normal', value: 'normal'}],
              lists: [],
              marks: {
                decorators: [
                  {title: 'Strong', value: 'strong'},
                  {title: 'Emphasis', value: 'em'},
                  {title: 'Highlight', value: 'highlight'},
                ],
              },
            },
          ],
        }),
      ],
    }),

    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skill'}}],
      initialValue: [],
    }),

    defineField({
      name: 'works',
      title: 'Works',
      type: 'array',
      of: [{type: 'reference', to: {type: 'work'}}],
      initialValue: [],
    }),

    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{type: 'reference', to: {type: 'testimonial'}}],
      initialValue: [],
    }),

    defineField({
      name: 'socialHandles',
      title: 'Social Handles',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {type: 'socialHandle'},
        },
      ],
      initialValue: [],
    }),

    defineField({
      name: 'resume',
      title: 'resume',
      type: 'reference',
      to: {type: 'resume'},
    }),

    defineField({
      name: 'contacts',
      title: 'Contacts',
      type: 'object',
      fields: [
        defineField({
          name: 'phone',
          title: 'Phone',
          type: 'array',
          of: [
            {
              type: 'string',
            },
          ],
        }),
        defineField({
          name: 'email',
          title: 'Email',
          type: 'array',
          of: [
            {
              type: 'string',
            },
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'introduction.role',
    },
  },
})
