import { urlFor } from "@/app/lib/sanity/sanity";
import BlogHeader from "./blogHeader";
import BlogContent from "./blogContent";
import EyesDivider from "@/app/components/ui/dividers/eyesDivider";
import { getBlogBySlug, getLatestTenBlogs } from "@/app/lib/sanity/api";
import WhatsNext from "./whatsNext";
import SignUp from "@/app/components/signUp";

export const revalidate = 120;

async function BlogPage({ params }: { params: { slug: string } }) {
  const blog = await getBlogBySlug(params.slug);
  const blogs = await getLatestTenBlogs();

  if (!blog) {
    return <p>Blog was not found!</p>;
  }

  return (
    <div className="flex flex-col items-center gap-[75px]">
      <BlogHeader
        title={blog.title}
        subtitle={blog.description}
        image={urlFor(blog.image).url() as string}
      />
      <BlogContent blog={blog} />
      <EyesDivider />
      <WhatsNext blogs={blogs} currentSlug={blog.slug} />
      <SignUp />
    </div>
  );
}

export default BlogPage;
