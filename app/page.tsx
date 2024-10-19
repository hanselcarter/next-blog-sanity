import { client } from "./lib/sanity";
import HomeImg from "../public/assets/homeImg.svg";
import Image from "next/image";
import Divider from "./components/ui/divider";
import HomeHeadline from "./components/homeHeadline";
async function getData() {
  const query = `*[_type=="blog"]| order(_createdAt desc){
  title,
  "slug":slug.current,
  image,
  description,
}`;

  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  // const data = await getData();
  // console.log(data, "j");
  return (
    <div className="flex flex-col items-center py-[77px]">
      <HomeHeadline />
      <div className="max-w-[858px] flex flex-col items-center">
        <p className="text-black text-center font-new-york-extra-large text-[44px]  font-bold leading-normal pt-[64px]">
          All Articles
        </p>
      </div>
    </div>
  );
}
