import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'socialHandle',
  title: 'Social Handle',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      description: 'eg. LinkedIn',
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
          {title: 'Youtube', value: 'Youtube'},
          {title: 'Instagram', value: 'Instagram'},
          {title: 'Behance', value: 'Behance'},
          {title: 'Medium', value: 'Medium'},
          {title: 'Reddit', value: 'Reddit'},
        ],
      },
    }),
    defineField({
      name: 'urlLink',
      title: 'URL Link',
      type: 'string',
    }),
  ],

  preview: {
    select: {
      title: 'name',
    },
  },
})
