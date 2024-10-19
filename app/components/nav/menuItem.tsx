interface MenuItemProps {
  title: string;
}
function MenuItem({ title }: MenuItemProps) {
  return (
    <div className=" flex-col gap-[40px] hidden xs-nav-menu:flex">
      <p className="text-black text-center font-['New_York_Small'] text-[20px] font-normal leading-[170%] tracking-[2.4px] uppercase">
        {title}
      </p>

      <div className="w-[66px] h-[2px] bg-black"></div>
    </div>
  );
}

export default MenuItem;
