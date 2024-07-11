import { defineArrayMember, defineField, defineType } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";
export const homeVisit = defineType({
  name: "homeVisit",
  title: "Home Visit",
  type: "object",
  fields: [
    defineField({
      name: "Hours",
      title: "Hours",
      type: "object",
      fields: [
        defineField({
          title: "Monday",
          name: "monday",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "tuesday",
          title: "Tuesday",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "wednesday",
          title: "Wednesday",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "thursday",
          title: "Thursday",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "friday",
          title: "Friday",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: "images",
      title: "LandmarkImages",
      type: "array",
      of: [
        defineArrayMember({
          name: "landmarkCard",
          title: "Card",
          type: "image",
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subHeading",
      title: "Sub-Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
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
        title: "Home Visiting",
        subtitle: "home",
        media: image || DocumentTextIcon,
      };
    },
  },
});
