import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'menuItem',
  title: 'Menu Items',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(58),
    }),
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input: string) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      description: 'Example: 2.99 (Do not $)',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Is this a NEW item',
      name: 'featured',
      type: 'boolean',
    }),
    defineField({
      title: 'Show before other menu items',
      name: 'showFirst',
      type: 'boolean',
      hidden: ({document}) => !document?.featured,
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
