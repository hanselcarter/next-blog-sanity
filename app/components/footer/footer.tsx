import { splitSentence } from "@/app/lib/strings";
import Logo from "../../../public/assets/footerLogo.svg";
import Image from "next/image";

const socialMedia = ["Twitter", "LinkedIn", "Rss"];
//Sentece to split and display in the footer, I wrote a split function in roder to split once I find the one that start on upper case to represent based on figma design
const sentence =
  "Digital product Design Remote work UX design Distributed teams Creativity Creativity Growth Digital product Design Remote work UX design Distributed teams Creativity Creativity Growth";
function Footer() {
  const splitSentenceArray = splitSentence(sentence);
  return (
    <footer className="h-[464px] w-full bg-black flex flex-col fixed bottom-0">
      <div className=" flex gap-[13px] text-white mt-[18px]">
        {splitSentenceArray.map((word, index) => (
          <p
            className={`whitespace-nowrap text-[#FFF] font-sf-pro-text text-[20px] leading-[28px] tracking-[2px] uppercase ${
              index % 2 == 0 ? "font-extrabold" : "font-extralight"
            }`}
            key={index}
          >
            {word}
          </p>
        ))}
      </div>
      <div className="w-full flex flex-col justify-center mt-[105px] items-center gap-[25.58px]">
        <Image src={Logo} alt="logo" width={291} height={27} />
        <p className="max-w-[488px] text-[#FFF] text-center font-new-york-small text-[16px] font-normal leading-[22.4px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit
          tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce
          a nunc eget ligula suscipit finibus.
        </p>
        <div className="flex gap-[27px] mt-4">
          {socialMedia.map((media, index) => (
            <p
              key={index}
              className="text-[#FFF] font-sf-pro-text text-[16px] font-medium leading-[27.2px] underline"
            >
              {media}
            </p>
          ))}
        </div>
        <p className="w-[178px] text-[#FFF] text-center font-sf-pro-text text-[12px] font-normal  leading-[16.8px] mt-6">
          {"© 2012–2020 Nordic Rose Co. All rights reserved."}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
