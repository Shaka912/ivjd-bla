import { defineArrayMember, defineField, defineType } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";
export const projectSection = defineType({
  name: "projectSection",
  title: "Projects Section",
  type: "object",
  fields: [
    defineField({
      name: "projects",
      type: "string",
      hidden: true,
      initialValue: "projects",
    }),
    defineField({
      name: "projectsArray",
      title: "Projects",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [
        defineArrayMember({
          name: "project",
          title: "projects",
          type: "reference",
          to: [
            {
              type: "projects",
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
        title: "Projects Section",
        media: DocumentTextIcon,
      };
    },
  },
});
