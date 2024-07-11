import { defineArrayMember, defineField, defineType } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

export const subLink = defineType({
  name: "subLink",
  title: "Sub Link",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "link",
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
