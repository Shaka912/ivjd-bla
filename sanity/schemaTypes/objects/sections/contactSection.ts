import { defineArrayMember, defineField, defineType } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";
export const contactSection = defineType({
  name: "contactSection",
  title: "Contact Section",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "button",
      title: "Button",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "link",
          title: "Link",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
  icon: DocumentTextIcon,
  preview: {
    select: {
      title: "heading",
    },
    prepare({ title }) {
      return {
        title: title || "Untitled",
        subtitle: "contact section",
        media: DocumentTextIcon,
      };
    },
  },
});
