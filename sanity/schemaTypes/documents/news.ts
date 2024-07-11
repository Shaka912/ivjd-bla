import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "news",
  title: "News",
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
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [
        defineArrayMember({
          name: "category",
          title: "Category",
          type: "reference",
          to: [
            {
              type: "category",
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "portableText",
      description: "Enter the News Description.",

      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
      initialValue: new Date().toISOString().split("T")[0],
    }),
    defineField({
      name: "country",
      title: "Country",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "city",
      title: "City",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    }),
    defineField({
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    }),
  ],
});
