import Image from "next/image";
import Logo from "../../../public/assets/logo.svg";
import MenuItem from "./menuItem";

function NavBar() {
  return (
    <nav className="w-full shadow-[0px_1px_0px_0px_rgba(0,0,0,0.16)] flex justify-between pt-[52.4px] px-[63.58px] items-baseline">
      <Image src={Logo} width={396} height={37} alt="logo" priority />

      <MenuItem title="Blog" />
    </nav>
  );
}

export default NavBar;
