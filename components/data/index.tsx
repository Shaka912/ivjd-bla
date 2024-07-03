// data/projects.js
export const projects = [
  {
    country: "Country Name",
    featuredImage: "/homeImg2.png", // Local image path
    year: 2023,
    _id: "1",
    description: [
      {
        type: "paragraph",
        children: [{ text: "Project description goes here." }],
      },
    ],
    title: "Project Title",
    slug: "project-slug",
    images: ["/homeImg2.png", "/homeImg2.png", "/homeImg2.png"],
    backgroundColor: "#fff",
    textColor: "#000",
    nextProjectSlug: "next-project",
  },
  // More project objects...
];
const projectImages = [
  {
    image: "/Fortuny.png",
    description: "Description for Image 1",
  },
  {
    image: "/Jarras.png",
    description: "Description for Image 2",
  },
  {
    image: "/blackplato.png",
    description: "Description for Image 3",
  },
];

export default projectImages;
