import { defineArrayMember, defineField, defineType } from "sanity";

export const blogs = defineType({
  name: "blogs",
  title: "Blogs",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "publishedAt",
      title: "PublishedAt",
      type: "date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true, 
      },
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      description: "The content of the blog post.",
      of: [
        defineArrayMember({
          type: "block",
        }),
      ],
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      description: "A list of tags for the blog post.",
    }),
  ],
});
