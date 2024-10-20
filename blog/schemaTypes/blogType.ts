import {defineField, defineType} from 'sanity'

export const blogType = defineType({
  name: 'blog',
  title: 'Blog',
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
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'minsToRead',
      title: 'MinsToRead',
      type: 'string',
    }),
    defineField({
      name: 'publishedAt',
      title: 'PublishedAt',
      type: 'string',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
    }),
    defineField({
      name: 'authorImage',
      title: 'AuthorImage',
      type: 'image',
    }),
    defineField({
      name: 'authorHeadline',
      title: 'AuthorHeadline',
      type: 'string',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'string',
    }),
  ],
})
