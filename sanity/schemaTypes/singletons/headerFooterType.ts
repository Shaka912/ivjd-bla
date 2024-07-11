import { HomeIcon } from "@sanity/icons";
import { defineArrayMember, defineField } from "sanity";
import { GROUPS } from "../../constants";

const TITLE = "Header Footer";

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
      name: "footerLinks",
      type: "array",
      title: "Footer Links",
      of: [
        defineArrayMember({
          name: "subLink",
          type: "subLink",
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
