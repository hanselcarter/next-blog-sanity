import Link from "next/link";

interface MenuItemProps {
  title: string;
  linkTo: string;
}
function MenuItem({ title, linkTo }: MenuItemProps) {
  return (
    <Link
      href={linkTo}
      className=" flex-col gap-[40px] hidden xs-nav-menu:flex"
    >
      <p className="text-black text-center font-['New_York_Small'] text-[20px] font-normal leading-[170%] tracking-[2.4px] uppercase">
        {title}
      </p>

      <div className="w-[66px] h-[2px] bg-black"></div>
    </Link>
  );
}

export default MenuItem;
