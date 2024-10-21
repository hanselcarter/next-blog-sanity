import { urlFor } from "./lib/sanity/sanity";
import HomeHeadline from "./components/homeHeadline";
import Article from "./components/article";
import { getBlogs } from "./lib/sanity/api";

export const revalidate = 120;

export default async function Home() {
  const blogs = await getBlogs();

  return (
    <div className="flex flex-col items-center py-[77px]">
      <HomeHeadline />
      <div className="max-w-[858px] flex flex-col items-center">
        <p className="text-black text-center font-new-york-extra-large text-[44px]  font-bold leading-normal pt-[64px] pb-[39px]">
          All Articles
        </p>
        <div className=" flex flex-col xs-nav-menu:grid xs-nav-menu:grid-cols-2 xs-nav-menu:gap-[28px] ">
          {blogs.map((blog, index) => (
            <Article
              key={index}
              img={urlFor(blog.image).url() as string}
              description={blog.description}
              alt={blog.title}
              slug={blog.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
