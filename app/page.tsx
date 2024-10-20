import { client, urlFor } from "./lib/sanity/sanity";

import HomeHeadline from "./components/homeHeadline";
import { Blog } from "./models/blog";
import Image from "next/image";
import HomeImg from "../public/assets/homeImg.svg";
import Article from "./components/article";

async function getData(): Promise<Blog[]> {
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

  const data = await client.fetch(query);
  return data;
}
export const revalidate = 30;

export default async function Home() {
  const data = await getData();
  console.log(data, "j");
  return (
    <div className="flex flex-col items-center py-[77px]">
      <HomeHeadline />
      <div className="max-w-[858px] flex flex-col items-center">
        <p className="text-black text-center font-new-york-extra-large text-[44px]  font-bold leading-normal pt-[64px] pb-[39px]">
          All Articles
        </p>
        <div className=" flex flex-col xs-nav-menu:grid xs-nav-menu:grid-cols-2 xs-nav-menu:gap-[28px] ">
          <div className=" flex  flex-col gap-[20px] items-center">
            <Image src={HomeImg} width={304} height={176} alt="art" />
            <p className="w-[262px] text-black text-center font-sf-pro-display text-[22px] font-medium leading-[120%]">
              Here are some things you should know regarding how we work
            </p>
          </div>
          <div className=" flex  flex-col gap-[20px] items-center">
            <Image src={HomeImg} width={304} height={176} alt="art" />
            <p className="w-[262px] text-black text-center font-sf-pro-display text-[22px] font-medium leading-[120%]">
              Here are some things you should know regarding how we work
            </p>
          </div>
          {data.map((blog, index) => (
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
