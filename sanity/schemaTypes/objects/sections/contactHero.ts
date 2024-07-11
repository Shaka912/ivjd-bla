import { defineArrayMember, defineField, defineType } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

export const contactHero = defineType({
  name: "contactHero",
  title: "Contact Hero",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "contactDetail",
      title: "Contact Detail",
      type: "array",
      of: [
        defineArrayMember({
          name: "contactInfoDetail",
          title: "ContactInfo",
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
              name: "link",
              title: "Link",
              type: "string",
            }),
          ],
        }),
      ],
    }),
  ],
  icon: DocumentTextIcon,
  preview: {
    select: {
      title: "heading",
      image: "image",
    },
    prepare({ title, image }) {
      return {
        title: "Hero",
        subtitle: "contact",
        media: image || DocumentTextIcon,
      };
    },
  },
});
