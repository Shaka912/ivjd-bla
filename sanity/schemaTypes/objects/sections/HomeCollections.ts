import { defineArrayMember, defineField, defineType } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";
export const homeCollections = defineType({
  name: "homeCollections",
  title: "Home Collections",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "collectionItems",
      title: "Collection Items",
      type: "array",
      of: [
        defineArrayMember({
          name: "card",
          title: "Card",
          type: "collectionItems",
        }),
      ],
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
        title: "Home Collections",
        subtitle: "home",
        media: image || DocumentTextIcon,
      };
    },
  },
});

export const collectionItems = defineType({
  name: "collectionItems",
  title: "Collection Items",
  type: "object",
  fields: [
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subTitle",
      title: "Sub Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "link",
      title: "Button",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "link",
          title: "Link",
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
        title: "collection items",
        subtitle: "collection item",
        media: image || DocumentTextIcon,
      };
    },
  },
});
