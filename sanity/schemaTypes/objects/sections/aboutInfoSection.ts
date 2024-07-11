import { defineArrayMember, defineField, defineType } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

export const aboutInfoSection = defineType({
  name: "aboutInfoSection",
  title: "About Info Section",
  type: "object",
  fields: [
    defineField({
      title: "Year",
      name: "year",
      type: "string",
    }),

    defineField({
      title: "Date And Month",
      name: "dateAndMonth",
      type: "string",
    }),
    defineField({
      title: "Time",
      name: "time",
      type: "string",
    }),
    defineField({
      name: "info",
      title: "Info Title",
      type: "array",
      of: [
        defineField({
          name: "info",
          title: "Info",
          type: "string",
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
        title: "About Info Section",
        subtitle: "about",
        media: image || DocumentTextIcon,
      };
    },
  },
});
