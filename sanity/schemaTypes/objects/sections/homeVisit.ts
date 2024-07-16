import { defineArrayMember, defineField, defineType } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

export const homeVisit = defineType({
  name: "homeVisit",
  title: "Home Visit",
  type: "object",
  fields: [
    defineField({
      name: "hours",
      title: "Hours",
      type: "array",
      of: [
        defineArrayMember({
          name: "dayHour",
          title: "Day and Hour",
          type: "object",
          fields: [
            defineField({
              name: "day",
              title: "Day",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "hour",
              title: "Hour",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
          ],
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
