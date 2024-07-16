import { defineArrayMember, defineField, defineType } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";
export const shopSection = defineType({
  name: "shopSection",
  title: "Shop Section",
  type: "object",
  fields: [
    defineField({
      name: "Shop",
      type: "string",
      hidden: true,
      initialValue: "shop",
    }),
    defineField({
      name: "productArray",
      title: "Products",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [
        defineArrayMember({
          name: "product",
          title: "product",
          type: "reference",
          to: [
            {
              type: "product",
            },
          ],
        }),
      ],
    }),
  ],
  icon: DocumentTextIcon,
  preview: {
    select: {},
    prepare({}) {
      return {
        title: "shopSection",
        media: DocumentTextIcon,
      };
    },
  },
});
