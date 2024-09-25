import { MenuIcon } from "@sanity/icons";
import { defineArrayMember, defineField } from "sanity";
import { GROUPS } from "../../constants";

const TITLE = "Navbar";

export const navbarType = defineField({
  name: "navbar",
  title: TITLE,
  type: "document",
  icon: MenuIcon,
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
          name: "title",
          title: "Title",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "logo",
          type: "image",
          options: { hotspot: true },
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
          type: "object",
          fields: [
            defineField({
              name: "title",
              type: "string",
              //   validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "link",
              type: "string",
              //   validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "dropDown",
              type: "boolean",
              title: "Has Dropdown",
              //   validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        media: MenuIcon,
        subtitle: "Navbar Configuration",
        title: TITLE,
      };
    },
  },
});
