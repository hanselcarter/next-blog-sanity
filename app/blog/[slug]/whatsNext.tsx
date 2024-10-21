import Article from "@/app/components/article";
import { urlFor } from "@/app/lib/sanity/sanity";
import { Blog } from "@/app/models/blog";

export interface WhatsNextProps {
  blogs: Blog[];
  currentSlug?: string;
}

function WhatsNext({ blogs, currentSlug }: WhatsNextProps) {
  return (
    <div className="flex flex-col gap-[27px] items-center">
      <p className="text-black text-center font-new-york-extra-large text-[44px]  font-bold leading-normal">
        What to read next
      </p>
      <div className=" flex flex-col xs-nav-menu:grid xs-nav-menu:grid-cols-3 xs-nav-menu:gap-[28px] ">
        {blogs.map((blog) =>
          currentSlug === blog.slug ? null : (
            <Article
              slug={blog.slug}
              key={blog.slug}
              alt={blog.title}
              description={blog.description}
              img={urlFor(blog.image).url() as string}
            />
          )
        )}
      </div>
    </div>
  );
}

export default WhatsNext;
