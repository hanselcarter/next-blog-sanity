import Image from "next/image";
import Link from "next/link";

interface ArticleProps {
  img: string;
  alt: string;
  description: string;
  slug: string;
}

function Article({ img, alt, description, slug }: ArticleProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className=" flex  flex-col gap-[20px] items-center"
    >
      <Image src={img} width={304} height={176} alt={alt} />
      <p className="w-[262px] text-black text-center font-sf-pro-display text-[22px] font-medium leading-[120%] line-clamp-4">
        {description}
      </p>
    </Link>
  );
}

export default Article;
