import { HomeIcon } from "@sanity/icons";
import { defineArrayMember, defineField } from "sanity";
import { GROUPS } from "../../constants";

const TITLE = "Footer";

export const headerFooterType = defineField({
  name: "header-footer",
  title: TITLE,
  type: "document",
  icon: HomeIcon,
  groups: GROUPS,
  fields: [
    defineField({
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: "header",
      title: "Header",
      type: "object",
      fields: [
        defineField({
          name: "logo",
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
    defineField({
      name: "contact",
      title: "Contact",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "phone",
          title: "Phone",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "email",
          title: "Email",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "text",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: "navLinks",
      type: "array",
      title: "Nav Links",
      of: [
        defineArrayMember({
          name: "navLink",
          type: "navLink",
        }),
      ],
    }),
    defineField({
      name: "legalLinks",
      type: "array",
      title: "Legal Links",
      of: [
        defineArrayMember({
          name: "navLink",
          type: "navLink",
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        media: HomeIcon,
        subtitle: "Index",
        title: TITLE,
      };
    },
  },
});
