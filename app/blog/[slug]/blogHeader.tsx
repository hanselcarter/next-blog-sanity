import Headline from "@/app/components/ui/headline";

import Image from "next/image";

interface BlogHeaderProps {
  title: string;
  subtitle: string;
  image: string;
}

function BlogHeader({ subtitle, image, title }: BlogHeaderProps) {
  return (
    <>
      <Headline title={title} subtitle={subtitle} />
      <div>
        <Image src={image} alt="home" className="w-full h-[533px]" />
      </div>
    </>
  );
}

export default BlogHeader;
