import { defineArrayMember, defineField, defineType } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

export const homeHeroCard = defineType({
  name: "homeHeroCard",
  title: "Card",
  type: "object",
  fields: [
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
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
        title: title || "Untitled",
        media: image || DocumentTextIcon,
      };
    },
  },
});
