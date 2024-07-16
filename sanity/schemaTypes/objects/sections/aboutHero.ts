import { defineArrayMember, defineField, defineType } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";
export const aboutHero = defineType({
  name: "aboutHero",
  title: "About Hero",
  type: "object",
  fields: [
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
      ],
    }),
    defineField({
      name: "heading1",
      type: "string",
    }),

    defineField({
      name: "description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    }),

    defineField({
      name: "heading2",
      type: "string",
    }),
    // defineField({
    //   name: "aboutSocialMedia",
    //   title: "About Social Media",
    //   type: "array",
    //   of: [
    //     defineArrayMember({
    //       name: "socialMedia",
    //       title: "Social Media",
    //       type: "reference",
    //       to: [
    //         {
    //           type: "socialMedia"
    //         }
    //       ]
    //     })
    //   ]
    // }),
    defineField({
      name: "contact",
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
        title: "Hero",
        subtitle: "about",
        media: image || DocumentTextIcon,
      };
    },
  },
});
