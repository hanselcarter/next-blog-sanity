import Image from "next/image";

import HomeImg from "../../public/assets/homeImg.svg";
import Headline from "./ui/headline";

function HomeHeadline() {
  return (
    <>
      <div>
        <Image src={HomeImg} alt="home" className="w-[854px] h-[533px]" />
      </div>
      <Headline
        title=" A few words about this blog platform, Ghost, and how this site was
          made"
        subtitle="  Why Ghost (& Figma) instead of Medium, WordPress or other options?"
        divider
      />
    </>
  );
}

export default HomeHeadline;
