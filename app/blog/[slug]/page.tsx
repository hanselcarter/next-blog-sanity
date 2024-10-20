import { client, urlFor } from "@/app/lib/sanity/sanity";
import { Blog } from "@/app/models/blog";
import Image from "next/image";
import BlogHeader from "./blogHeader";
import BlogContent from "./blogContent";
import Divider from "@/app/components/ui/dividers/divider";
import Eyes from "../../../public/assets/eyes.svg";
import EyesDivider from "@/app/components/ui/dividers/eyesDivider";

async function getData(slug: string): Promise<Blog> {
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

  const data = await client.fetch(query);
  return data;
}

export const revalidate = 30;

async function BlogPage({ params }: { params: { slug: string } }) {
  const blog = await getData(params.slug);

  if (!blog) {
    return <p>Blog was not found!</p>;
  }

  console.log(blog, "data");
  return (
    <div className="flex flex-col items-center gap-[75px]">
      <BlogHeader
        title={blog.title}
        subtitle={blog.description}
        image={urlFor(blog.image).url() as string}
      />
      <BlogContent blog={blog} />
      <EyesDivider />
    </div>
  );
}

export default BlogPage;
