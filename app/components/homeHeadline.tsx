import Image from "next/image";
import Divider from "./ui/divider";
import HomeImg from "../../public/assets/homeImg.svg";

function HomeHeadline() {
  return (
    <>
      <div>
        <Image src={HomeImg} alt="home" className="w-[854px] h-[533px]" />
      </div>
      <div className="max-w-[858px] flex flex-col gap-[32px] items-center mt-[48px]">
        <p className="text-black text-center font-['New_York_Extra_Large'] text-[54px]  font-bold leading-[54px]">
          A few words about this blog platform, Ghost, and how this site was
          made
        </p>
        <p className="max-w-[428px] text-black text-center font-['SF_Mono'] text-[20px] font-normal leading-[34px]">
          Why Ghost (& Figma) instead of Medium, WordPress or other options?
        </p>
        <Divider />
      </div>
    </>
  );
}

export default HomeHeadline;
