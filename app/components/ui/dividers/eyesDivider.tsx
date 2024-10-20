import Image from "next/image";
import Eyes from "../../../../public/assets/eyes.svg";

function EyesDivider() {
  return (
    <div className="w-full flex items-center">
      <div className="h-[2px] bg-black w-full"></div>
      <Image src={Eyes} alt="eyes" width={82} height={64.2} />
      <div className="h-[2px] bg-black w-full"></div>
    </div>
  );
}

export default EyesDivider;
