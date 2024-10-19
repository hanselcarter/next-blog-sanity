import { client } from "./lib/sanity";
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
  const data = await getData();
  console.log(data, "j");
  return <div className=""></div>;
}
