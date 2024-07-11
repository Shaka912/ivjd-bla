import { defineArrayMember, defineField, defineType } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";
export const homeResearchCentre = defineType({
  name: "homeResearchCentre",
  title: "Home Research Centre",
  type: "object",
  fields: [
    defineField({
      name: "main",
      title: "Main",
      type: "object",
      fields: [
        defineField({
          name: "leftImage",
          type: "image",
          options: { hotspot: true },
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "rightImage",
          type: "image",
          options: { hotspot: true },
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "title",
          title: "Title",
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
      image: "image",
    },
    prepare({ title, image }) {
      return {
        title: "Home Research Centre",
        subtitle: "home",
        media: image || DocumentTextIcon,
      };
    },
  },
});
