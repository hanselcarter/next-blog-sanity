import Divider from "./dividers/divider";

interface HeadlineProps {
  title: string;
  subtitle: string;
  divider?: boolean;
}

function Headline({ title, subtitle, divider }: HeadlineProps) {
  return (
    <div className="max-w-[858px] flex flex-col gap-[32px] items-center mt-[48px]">
      <p className="text-black text-center font-['New_York_Extra_Large'] text-[54px]  font-bold leading-[54px]">
        {title}
      </p>
      <p className="max-w-[428px] text-black text-center font-['SF_Mono'] text-[20px] font-normal leading-[34px]">
        {subtitle}
      </p>
      {divider && <Divider />}
    </div>
  );
}

export default Headline;
