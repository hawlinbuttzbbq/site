import { defineField, defineType } from "sanity";
import PriceInput from "../components/PriceInput";

export default defineType({
  name: "menuItem",
  title: "Menu Items",
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
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
    defineField({
      name: "price",
      title: "Price",
      description: "Example: 2.99 (Do not $)",
      type: "number",
      // validation: (Rule) => Rule.required().positive().precision(2),
      components: {
        // input: PriceInput,
        // field: PriceInput,
      },
    }),
    defineField({
      title: "Is this a NEW item",
      name: "featured",
      type: "boolean",
    }),
    defineField({
      title: "Show before other menu items",
      name: "showFirst",
      type: "boolean",
      hidden: ({ document }) => !document?.featured,
    }),
    defineField({
      name: "body",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          fields: [
            {
              type: "text",
              name: "alt",
              title: "Alternative text",
              description: `Some of your visitors cannot see images, 
            be they blind, color-blind, low-sighted; 
            alternative text is of great help for those 
            people that can rely on it to have a good idea of 
            what\'s on your page.`,
              options: {
                isHighlighted: true,
              },
            },
          ],
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
