import Image from "next/image";
import { Button } from "../../design-system/button/Button";
import { ArrowIcon } from "../../design-system/svg/ArrowIcon";
import { Typography } from "../../design-system/typography/Typography";

interface Props {
  placeholderPath: string;
  title: string;
  content: string;
}

export const CategoryCard = ({ placeholderPath, title, content }: Props) => {
  return (
    <div className="relative flex flex-col category-card">
      <Image
        src={placeholderPath}
        alt="fond de présentation d'alcool breton"
        className="w-full h-full object-cover contrast-125"
        layout="fill"
      />
      <div className="absolute inset-0 flex justify-end">
        <div className="flex justify-center items-center h-[40px] mt-5 mr-10 gap-3 arrow-container animate opacity-0">
          <Typography font="outfit" color="white" className="font-medium">
            Tout découvrir
          </Typography>
          <Button variant="icon" className="h-[30px] w-[30px] !bg-[#ffffff9f]">
            <ArrowIcon color="white" className="text-white h-[30px] w-[30px]" />
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 flex flex-col justify-end px-[15px] py-[25px] z-10 text-container animate">
        <Typography
          variant="h3"
          color="white"
          font="outfit"
          className="text-[35px] font-medium pb-1 contrast-200 max-sm:text-[30px]"
        >
          {title}
        </Typography>
        <Typography
          variant="p"
          font="quicksand"
          className="my-0 font-light text-white max-sm:text-[12px]"
        >
          {content}
        </Typography>
      </div>
    </div>
  );
};
