import { Blog } from "@/app/models/blog";
import { client } from "./sanity";

export async function getBlogBySlug(slug: string): Promise<Blog> {
  const query = `*[_type=="blog"  && slug.current == '${slug}']{
      title,
      "slug":slug.current,
      image,
      description,
      publishedAt,
      author,
      authorHeadline,
      authorImage,
      minsToRead,
      tags,
      content
    }[0]`;

  const blog = await client.fetch(query);
  return blog;
}

export async function getBlogs(): Promise<Blog[]> {
  const query = `*[_type=="blog"]| order(_createdAt desc){
    title,
    "slug":slug.current,
    image,
    description,
    publishedAt,
    author,
    authorHeadline,
    authorImage,
    minsToRead
  }`;

  const blogs = await client.fetch(query);
  return blogs;
}
