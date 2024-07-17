import { GROUPS } from "@/sanity/constants";
import { DocumentIcon } from "@sanity/icons";
import { defineArrayMember, defineField } from "sanity";

export const pageType = defineField({
  name: "page",
  title: "Page",
  type: "document",
  icon: DocumentIcon,
  groups: GROUPS,

  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: "sections",
      type: "array",
      title: "Sections",
      of: [
        defineArrayMember({
          name: "homeHero",
          type: "homeHero",
        }),
        defineArrayMember({
          name: "homeResearchCentre",
          type: "homeResearchCentre",
        }),
        defineArrayMember({
          name: "homeCollections",
          type: "collectionSection",
        }),
        defineArrayMember({
          name: "Home Visit",
          type: "homeVisit",
        }),
        defineArrayMember({
          name: "contactSection",
          type: "contactSection",
        }),
        defineArrayMember({
          name: "contactHero",
          type: "contactHero",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      seoImage: "seo.image",
      title: "title",
    },
    prepare({ seoImage, title }) {
      return {
        media: seoImage ?? DocumentIcon,
        title,
      };
    },
  },
});
