import { client } from "@/app/lib/sanity/sanity";
import { Blog } from "@/app/models/blog";
export const dynamic = "force-dynamic";

async function getData(slug: string): Promise<Blog> {
  const query = `*[_type=="blog"  && slug.current == '${slug}']{
    title,
    "slug":slug.current,
    image,
    description,
    publishedAt,
    author,
    authorHeadline
  }[0]`;

  const data = await client.fetch(query);
  return data;
}

async function BlogPage({ params }: { params: { slug: string } }) {
  const data = await getData(params.slug);

  if (!data) {
    return <p>Blog was not found!</p>;
  }

  console.log(data, "data");
  return <div>Hi</div>;
}

export default BlogPage;
