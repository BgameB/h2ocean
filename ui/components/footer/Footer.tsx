import clsx from "clsx";
import { FaceBookIcon } from "../../design-system/svg/social-network/FacebookIcon";
import { InstagramIcon } from "../../design-system/svg/social-network/InstagramIcon";
import { LinkedInIcon } from "../../design-system/svg/social-network/LinkedInIcon";
import { TwitterIcon } from "../../design-system/svg/social-network/TwitterIcon";
import { StrilherezhLogo } from "../../design-system/svg/StrilherezhLogo";
import { Typography } from "../../design-system/typography/Typography";

export const Footer = ({}) => {
  const titleType = "mb-[20px] text-[20px] font-medium tracking-[1px]";
  const typoStyle = "font-extralight tracking-[0.8px]";
  const hoverAnimationGold =
    "bg-left-bottom bg-gradient-to-r from-gold to-gold bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-300 ease-out";
  const hoverAnimationGray =
    "bg-left-bottom bg-gradient-to-r from-gray to-gray bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-300 ease-out";

  return (
    <footer className="w-full border-t-2 border-t-gold">
      <div className="my-[100px] flex justify-center items-center">
        <StrilherezhLogo className="w-[344px] h-[200px] max-sm:w-[205px] max-sm:h-[120px]" />
      </div>
      <div className="flex justify-around mb-[115px] max-md:grid max-md:grid-cols-3 max-md:grid-rows-2 max-md:gap-y-[55px] max-md:px-[40px] max-sm:px-[60px] max-sm:flex max-sm:flex-col ">
        <div className="max-md:pl-[40px] max-sm:pl-0 border-[#text-[#E3E3E3] max-sm:border-t">
          <div className="max-sm:flex max-sm:flex-col max-sm:items-center justify-center max-sm:py-[40px]">
            <Typography
              color="gold"
              font="outfit"
              className={clsx(
                titleType,
                "group text-gold transition-all duration-300 ease-in-out"
              )}
            >
              <a href="#" className={clsx(hoverAnimationGold)}>
                Strilherezh
              </a>
            </Typography>

            <Typography
              color="gray"
              font="outfit"
              className={clsx(
                typoStyle,
                "mb-[10px] group text-gray transition-all duration-300 ease-in-out"
              )}
            >
              <a href="#" className={clsx(hoverAnimationGray)}>
                Notre histoire
              </a>
            </Typography>
            <Typography
              color="gray"
              font="outfit"
              className={clsx(
                typoStyle,
                "group text-gray transition-all duration-300 ease-in-out"
              )}
            >
              <a href="#" className={clsx(hoverAnimationGray)}>
                Tous nos produits
              </a>
            </Typography>
          </div>
        </div>
        <div className="max-md:pl-[40px] max-sm:pl-0 border-[#text-[#E3E3E3] max-sm:border-t">
          <div className="max-sm:flex max-sm:flex-col max-sm:items-center justify-center max-sm:py-[40px]">
            <Typography
              color="gold"
              font="outfit"
              className={clsx(
                titleType,
                "group text-gold transition-all duration-300 ease-in-out"
              )}
            >
              <a href="#" className={clsx(hoverAnimationGold)}>
                Skornenn
              </a>
            </Typography>

            <Typography
              color="gray"
              font="outfit"
              className={clsx(
                typoStyle,
                "mb-[10px] group text-gray transition-all duration-300 ease-in-out"
              )}
            >
              <a href="#" className={clsx(hoverAnimationGray)}>
                Histoire de Skornenn
              </a>
            </Typography>
            <Typography
              color="gray"
              font="outfit"
              className={clsx(
                typoStyle,
                "mb-[10px] group text-gray transition-all duration-300 ease-in-out"
              )}
            >
              <a href="#" className={clsx(hoverAnimationGray)}>
                Cidres natures
              </a>
            </Typography>
            <Typography
              color="gray"
              font="outfit"
              className={clsx(
                typoStyle,
                "mb-[10px] group text-gray transition-all duration-300 ease-in-out"
              )}
            >
              <a href="#" className={clsx(hoverAnimationGray)}>
                Cidres de feu
              </a>
            </Typography>
            <Typography
              color="gray"
              font="outfit"
              className={clsx(
                typoStyle,
                "group text-gray transition-all duration-300 ease-in-out"
              )}
            >
              <a href="#" className={clsx(hoverAnimationGray)}>
                Cidres de glace
              </a>
            </Typography>
          </div>
        </div>
        <div className="max-md:pl-[40px] max-sm:pl-0 border-[#text-[#E3E3E3] max-sm:border-t">
          <div className="max-sm:flex max-sm:flex-col max-sm:items-center justify-center max-sm:py-[40px]">
            <Typography
              color="gold"
              font="outfit"
              className={clsx(
                titleType,
                "group text-gold transition-all duration-300 ease-in-out"
              )}
            >
              <a href="#" className={clsx(hoverAnimationGold)}>
                Vins
              </a>
            </Typography>
            <Typography
              color="gray"
              font="outfit"
              className={clsx(
                typoStyle,
                "mb-[10px] group text-gray transition-all duration-300 ease-in-out"
              )}
            >
              <a href="#" className={clsx(hoverAnimationGray)}>
                Histoire de “Vins”
              </a>
            </Typography>
            <Typography
              color="gray"
              font="outfit"
              className={clsx(
                typoStyle,
                "mb-[10px] group text-gray transition-all duration-300 ease-in-out"
              )}
            >
              <a href="#" className={clsx(hoverAnimationGray)}>
                Vins rouges
              </a>
            </Typography>
            <Typography
              color="gray"
              font="outfit"
              className={clsx(
                typoStyle,
                "mb-[10px] group text-gray transition-all duration-300 ease-in-out"
              )}
            >
              <a href="#" className={clsx(hoverAnimationGray)}>
                Vins blancs
              </a>
            </Typography>
            <Typography
              color="gray"
              font="outfit"
              className={clsx(
                typoStyle,
                "group text-gray transition-all duration-300 ease-in-out"
              )}
            >
              <a href="#" className={clsx(hoverAnimationGray)}>
                Vins rosés
              </a>
            </Typography>
          </div>
        </div>
        <div className="max-md:pl-[40px] max-sm:pl-0 border-[#text-[#E3E3E3] max-sm:border-t">
          <div className="max-sm:flex max-sm:flex-col max-sm:items-center justify-center max-sm:py-[40px]">
            <Typography
              color="gold"
              font="outfit"
              className={clsx(
                titleType,
                "group text-gold transition-all duration-300 ease-in-out"
              )}
            >
              <a href="#" className={clsx(hoverAnimationGold)}>
                Whiskys
              </a>
            </Typography>
            <Typography
              color="gray"
              font="outfit"
              className={clsx(
                typoStyle,
                "mb-[10px] group text-gray transition-all duration-300 ease-in-out"
              )}
            >
              <a href="#" className={clsx(hoverAnimationGray)}>
                Histoire de “Whisky”
              </a>
            </Typography>
            <Typography
              color="gray"
              font="outfit"
              className={clsx(
                typoStyle,
                "mb-[10px] group text-gray transition-all duration-300 ease-in-out"
              )}
            >
              <a href="#" className={clsx(hoverAnimationGray)}>
                Catégorie 1
              </a>
            </Typography>
            <Typography
              color="gray"
              font="outfit"
              className={clsx(
                typoStyle,
                "group text-gray transition-all duration-300 ease-in-out"
              )}
            >
              <a href="#" className={clsx(hoverAnimationGray)}>
                Catégorie 2
              </a>
            </Typography>
          </div>
        </div>
        <div className="max-md:pl-[40px] max-sm:pl-0 border-[#text-[#E3E3E3] max-sm:border-t">
          <div className="max-sm:flex max-sm:flex-col max-sm:items-center justify-center max-sm:py-[40px]">
            <Typography
              color="gold"
              font="outfit"
              className={clsx(
                titleType,
                "group text-gold transition-all duration-300 ease-in-out"
              )}
            >
              <a href="#" className={clsx(hoverAnimationGold)}>
                Exclusivités
              </a>
            </Typography>
            <Typography
              color="gray"
              font="outfit"
              className={clsx(
                typoStyle,
                "mb-[10px] group text-gray transition-all duration-300 ease-in-out"
              )}
            >
              <a href="#" className={clsx(hoverAnimationGray)}>
                Catégorie 1
              </a>
            </Typography>
            <Typography
              color="gray"
              font="outfit"
              className={clsx(
                typoStyle,
                "group text-gray transition-all duration-300 ease-in-out"
              )}
            >
              <a href="#" className={clsx(hoverAnimationGray)}>
                Catégorie 2
              </a>
            </Typography>
          </div>
        </div>
      </div>
      <Typography
        color="gray"
        className="text-[14px] text-center font-light tracking-[0.7px] mb-[20px]"
      >
        ©Skornenn 2024 - STRILHEREZH, France
      </Typography>
      <div className="border-t border-t-gold flex justify-between px-[50px] max-md:px-[25px] max-sm:px-[0px] py-[20px] max-sm:flex-col-reverse max-sm:bg-[#F4F4F4]">
        <div className="flex items-center gap-[25px] max-md:gap-[5px] max-sm:justify-center max-xs:grid max-xs:grid-cols-2 max-xs:grid-rows-3">
          <Typography
            color="gray"
            className={clsx(
              typoStyle,
              "group text-gray transition-all duration-300 ease-in-out max-md:text-[14px] max-xs:text-end"
            )}
          >
            <a href="#" className={clsx()}>
              CGU
            </a>
          </Typography>
          <Typography
            color="gray"
            className={clsx(
              typoStyle,
              "group text-gray transition-all duration-300 ease-in-out max-md:text-[14px] max-xs:text-start"
            )}
          >
            <a href="#" className={clsx()}>
              CGV
            </a>
          </Typography>
          <Typography
            color="gray"
            className={clsx(
              typoStyle,
              "group text-gray transition-all duration-300 ease-in-out max-md:text-[14px] max-xs:col-span-2 max-xs:text-center"
            )}
          >
            <a href="#" className={clsx()}>
              Politique de confidentialité
            </a>
          </Typography>
          <Typography
            color="gray"
            className={clsx(
              typoStyle,
              "group text-gray transition-all duration-300 ease-in-out max-md:text-[14px] max-xs:col-span-2 max-xs:text-center"
            )}
          >
            <a href="#" className={clsx()}>
              Mentions légales
            </a>
          </Typography>
        </div>
        <div className="flex justify-end gap-[15px] max-md:gap-[7px] max-sm:justify-center max-sm:gap-[15px] max-sm:mb-[15px]">
          <a href="#">
            <InstagramIcon />
          </a>
          <a href="#">
            <FaceBookIcon />
          </a>
          <a href="#">
            <TwitterIcon />
          </a>
          <a href="#">
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};
