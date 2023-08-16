import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  description: 'Food category. (Note: keep this short. It shows in the scrolling menu bar)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      title: 'Is this category used for sides',
      name: 'isSides',
      type: 'boolean',
    }),
    defineField({
      name: 'showOrder',
      title: 'Category order',
      description: 'The order the categories will show on the menu page',
      type: 'number',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Your Notes: This field does not show on the site. Its internal notes only',
    }),
  ],
})
