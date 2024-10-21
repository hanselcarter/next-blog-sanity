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
      <div className="w-full">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          src={image}
          alt="home"
        />
      </div>
    </>
  );
}

export default BlogHeader;
