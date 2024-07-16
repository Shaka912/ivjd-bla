import { defineArrayMember, defineField, defineType } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";
export const homeHero = defineType({
  name: "homeHero",
  title: "Home Hero",
  type: "object",
  fields: [
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
      name: "cards",
      title: "Cards",
      type: "array",
      of: [
        defineArrayMember({
          name: "card",
          title: "Card",
          type: "homeHeroCard",
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroCarouselContent",
      title: "Hero Carousel Content",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),

        defineField({
          name: "description",
          title: "Description",
          type: "text",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "description1",
          title: "Description1",
          type: "text",
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
        title: "Hero",
        subtitle: "home",
        media: image || DocumentTextIcon,
      };
    },
  },
});
