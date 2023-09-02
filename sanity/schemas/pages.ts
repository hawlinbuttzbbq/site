import { defineField, defineType } from "sanity";

export default defineType({
  name: "page",
  title: "Pages",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().min(1).max(58),
    }),
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      description:
        "Slugs are used as the page url. (NOTE: only lower case letters, numbers, & - are allowed)",
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input: string) => {
          const sanitized = input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-zA-Z0-9-]/g, "")
            .slice(0, 200);
          return sanitized;
        },
      },
      validation: (Rule) => [
        Rule.required(),
        Rule.custom((name: { _type: string; current: string }) => {
          // This would crash if we didn't check
          // for undefined values first
          if (typeof name === "undefined") {
            return true; // Allow undefined values
          }

          let hasSpecialCharacters = /[^\na-z0-9-]/g.test(name.current);
          return hasSpecialCharacters
            ? "Your slug has characters that are not allowed"
            : true;
        }),
      ],
    },
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
    defineField({
      name: "content",
      type: "array",
      title: "Content",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
