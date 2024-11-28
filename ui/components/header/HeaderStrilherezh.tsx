import clsx from "clsx";
import { StrilherezhLogo } from "../../design-system/svg/StrilherezhLogo";
import { Typography } from "../../design-system/typography/Typography";

export const HeaderStrilherezh = ({}) => {
  const typoStyle = "font-extralight";
  const underlineAnimationWhite =
    "bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-300 ease-out";

  return (
    <header className="h-[60px] bg-gold flex justify-between px-10 items-center max-sm:h-[50px] max-md:px-5 sticky top-0 z-20">
      <div>
        <StrilherezhLogo
          variant="white"
          className="max-sm:w-[120px] max-sm:h-[30px]"
        />
      </div>
      <div className="flex gap-6 items-center max-sm:gap-3 max-xs:gap-2">
        <button className="group text-white transition-all duration-300 ease-in-out">
          <Typography
            font="outfit"
            color="white"
            className={clsx(typoStyle, "max-sm:text-[14px]", underlineAnimationWhite)}
          >
            Tous nos produits
          </Typography>
        </button>
        <button className="group text-white transition-all duration-300 ease-in-out">
          <Typography
            font="outfit"
            color="white"
            className={clsx(typoStyle, "max-sm:hidden", underlineAnimationWhite)}
          >
            Notre histoire
          </Typography>
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="14"
          viewBox="0 0 18 14"
          fill="none"
          className="hidden max-sm:block"
        >
          <path d="M0 1H14" stroke="white" strokeWidth="1.5" />
          <path d="M0 7H14" stroke="white" strokeWidth="1.5" />
          <path d="M0 13H14" stroke="white" strokeWidth="1.5" />
          <path d="M16 1H17.5" stroke="white" strokeWidth="1.5" />
          <path d="M16 7H17.5" stroke="white" strokeWidth="1.5" />
          <path d="M16 13H17.5" stroke="white" strokeWidth="1.5" />
        </svg>
      </div>
    </header>
  );
};
