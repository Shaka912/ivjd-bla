import { defineArrayMember, defineField, defineType } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

export const navLink = defineType({
  name: "navLink",
  title: "Nav Link",
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
      type: "link",
    }),
    defineField({
      name: "sublinks",
      type: "array",
      title: "Sub Links",
      of: [
        defineArrayMember({
          title: "Sub Link",
          name: "subLink",
          type: "subLink",
        }),
      ],
    }),
  ],
  icon: DocumentTextIcon,
  preview: {
    select: {
      title: "title",
      image: "image",
    },
    prepare({ title, image }) {
      return {
        title: title,
        media: image || DocumentTextIcon,
      };
    },
  },
});
