import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "collections",
  title: "Collections",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      description: "Enter the Collection Description.",
      of: [
        {
          type: "block",
        },
      ],

      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "collection1R",
      title: "Collection 1 Row",
      type: "array",
      of: [
        defineArrayMember({
          name: "collection1R",
          title: "collection 1 row",
          type: "homeHeroCard",
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "featuredImage1",
      title: "Featured Image 1",
      type: "homeHeroCard",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "collection2R",
      title: "Collection 2 row",
      type: "array",
      of: [
        defineArrayMember({
          name: "collection2R",
          title: "Card",
          type: "homeHeroCard",
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    }),
    // defineField({
    //   name: "images",
    //   title: "Images",
    //   type: "array",
    //   of: [{ type: "image" }],
    // }),
    defineField({
      name: "backgroundColor",
      title: "BackgroundColor",
      type: "reference",
      validation: (Rule) => Rule.required(),
      to: [
        {
          type: "designSystemColors",
        },
      ],
    }),
    defineField({
      name: "textColor",
      title: "Text Color",
      type: "reference",
      validation: (Rule) => Rule.required(),
      to: [
        {
          type: "designSystemColors",
        },
      ],
    }),
  ],
});
