import {defineField, defineType} from 'sanity'
import {TwitterIcon} from '@sanity/icons'
export default defineType({
  name: 'socialMedia',
  title: 'Social Media',
  type: 'document',
  icon: TwitterIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
    }),
  ],
})
