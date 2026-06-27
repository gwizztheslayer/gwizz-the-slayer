export default {
  name: "transmission",
  type: "document",
  title: "Transmission (Blog Post)",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "publishedAt",
      type: "datetime",
      title: "Published at",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "excerpt",
      type: "text",
      title: "Excerpt / Short Summary",
      description: "Appears on the main page before clicking into the full post.",
    },
    {
      name: "mainImage",
      type: "image",
      title: "Cover Art",
      options: { hotspot: true },
    },
  ],
};