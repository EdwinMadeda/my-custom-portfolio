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
          name: 'welcomeMsg',
          title: 'Welcome Message',
          type: 'text',
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
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              type: 'string',
              options: {
                list: [
                  {title: 'LinkedIn', value: 'LinkedIn'},
                  {title: 'Github', value: 'Github'},
                  {title: 'Bitbucket', value: 'Bitbucket'},
                  {title: 'Facebook', value: 'Facebook'},
                  {title: 'Twitter', value: 'Twitter'},
                  {title: 'Discord', value: 'Discord'},
                  {title: 'Slack', value: 'Slack'},
                  {title: 'StackOverflow', value: 'StackOverflow'},
                  {title: 'Email', value: 'Email'},
                  {title: 'Resume', value: 'Resume'},
                ],
              },
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'string',
            }),
          ],
        },
      ],
      initialValue: [],
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
      ],
    }),
  ],
  preview: {
    select: {
      title: 'introduction.role',
    },
  },
})
