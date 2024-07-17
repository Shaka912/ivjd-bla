import { defineArrayMember, defineField, defineType } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";
export const collectionSection = defineType({
  name: "collectionSection",
  title: "collection Section",
  type: "object",
  fields: [
    defineField({
      name: "collections",
      type: "string",
      hidden: true,
      initialValue: "collections",
    }),
    defineField({
      name: "collectionsArray",
      title: "Collections",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [
        defineArrayMember({
          name: "collection",
          title: "collections",
          type: "reference",
          to: [
            {
              type: "collections",
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
        title: "Collection Section",
        media: DocumentTextIcon,
      };
    },
  },
});
