import Divider from "@/app/components/ui/dividers/divider";
import { urlFor } from "@/app/lib/sanity/sanity";
import { Blog } from "@/app/models/blog";
import Image from "next/image";
import Twitter from "../../../public/assets/twitter.svg";
import Facebook from "../../../public/assets/facebook.svg";
import { PortableText, PortableTextBlock } from "next-sanity";

interface BlogContentProps {
  blog: Blog;
}

function BlogContent({ blog }: BlogContentProps) {
  return (
    <div className="max-w-[854px] flex gap-[32px] flex-col items-center px-[52px]">
      <div className="flex flex-col w-full  gap-[32px] ">
        <Divider fullWidth />
        <div className="flex gap-2 flex-col xs-nav-menu:flex xs-nav-menu:flex-row xs-nav-menu:items-start justify-between w-full items-center">
          <div className="flex gap-[16px]">
            <Image
              className="rounded-full"
              alt={blog.author}
              width={57}
              height={57}
              src={urlFor(blog.authorImage).url() as string}
            />
            <div className="flex flex-col gap-1 mr-2">
              <p className="text-black font-sans text-[16px] font-bold tracking-[0.8px] uppercase">
                {blog.author}
              </p>
              <p className="text-black font-sans text-[16px] font-normal">{`${blog.publishedAt} ${blog.minsToRead} mins read`}</p>
            </div>
          </div>
          <div className="w-[140px] h-[44px] rounded-[4px] border border-[#EAEAEA] bg-white shadow-[0px_1px_4px_0px_rgba(0,0,0,0.08)] grid grid-cols-2">
            <div className="flex items-center justify-center border-r border-[#EAEAEA]">
              <Image width={20} height={20} src={Twitter} alt="twitter" />
            </div>
            <div className="flex items-center justify-center">
              <Image width={20} height={20} src={Facebook} alt="facebook" />
            </div>
          </div>
        </div>
      </div>
      <div className="prose prose-base">
        <PortableText value={blog.content} />
      </div>
      <div className="w-full h-[64px] rounded-[4px] border border-[#EAEAEA] bg-white shadow-[0px_1px_4px_0px_rgba(0,0,0,0.08)] grid grid-cols-2">
        <div className="flex items-center justify-center border-r border-[#EAEAEA] gap-1">
          <Image width={20} height={20} src={Twitter} alt="twitter" />
          <p className="text-black font-sf-pro-text text-[16px]  font-medium leading-[160%]">
            Facebook
          </p>
        </div>
        <div className="flex items-center justify-center gap-1">
          <Image width={20} height={20} src={Facebook} alt="facebook" />
          <p className="text-black font-sf-pro-text text-[16px]  font-medium leading-[160%]">
            Twitter
          </p>
        </div>
      </div>
      <div className="w-full flex gap-1">
        <p className="text-[#0C0C0C] font-sf-pro-text text-[16px]  font-medium leading-normal tracking-[0.48px] ">
          Tags:
        </p>
        <p className="text-[#0C0C0C] font-sf-pro-text text-[16px]  font-medium leading-normal tracking-[0.48px] underline">
          {blog.tags}
        </p>
      </div>
      <Divider fullWidth customHeight="h-[1px]" color="bg-[#cfcfcf]" />
      <div className="flex gap-[24px] w-full">
        <Image
          className="rounded-full"
          alt={blog.author}
          width={71}
          height={71}
          src={urlFor(blog.authorImage).url() as string}
        />

        <p className="text-[#0C0C0C] font-new-york-small text-[16px] font-normal leading-[160%] line-clamp-2">
          <strong>{blog.author}</strong> is a {blog.authorHeadline}
        </p>
      </div>
    </div>
  );
}

export default BlogContent;
