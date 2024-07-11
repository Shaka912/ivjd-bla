import { defineField, defineType } from "sanity";

export default defineType({
  name: "designSystemColors",
  title: "Design System Colors",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "color",
      title: "Color",
      type: "color",
    }),
  ],
  preview: {
    select: {
      title: "title",
      color: "color",
    },
    prepare({ color, title }) {
      return {
        title: title,
        media: (
          <span
            style={{
              width: "2rem",
              height: "2rem",
              borderRadius: "100%",
              backgroundColor: color.hex,
              overflow: "hidden",
              outline: "none",
            }}
          />
        ),
      };
    },
  },
});
