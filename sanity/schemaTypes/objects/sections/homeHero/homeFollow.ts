import { defineArrayMember, defineField, defineType } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

export const homeFollow = defineType({
  name: "homeFollow",
  title: "Home Follow",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "email",
      title: "Email",
      type: "object",
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "email",
          title: "Email",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        defineField({
          name: "image",
          type: "image",
          options: { hotspot: true },
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "aboutSocialMedia",
      title: "About Social Media",
      type: "array",
      of: [
        defineArrayMember({
          name: "socialMedia",
          title: "Social Media",
          type: "reference",
          to: [
            {
              type: "socialMedia",
            },
          ],
        }),
      ],
    }),
  ],
  icon: DocumentTextIcon,
  preview: {
    select: {
      title: "description",
      image: "image",
    },
    prepare({ title, image }) {
      return {
        title: "Home Follow",
        subtitle: "home",
        media: image || DocumentTextIcon,
      };
    },
  },
});
