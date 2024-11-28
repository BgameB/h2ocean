"use client";

import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowIcon } from "../../design-system/svg/ArrowIcon";
import { Typography } from "../../design-system/typography/Typography";

interface Props {
  className?: string;
}

const images = [
  "/img/skornenn/slide/canette-fruits-de-la-passion.png",
  "/img/skornenn/slide/cidre-aromatise.png",
  "/img/skornenn/slide/cidre-fruits-rouges.png",
  "/img/skornenn/slide/cidre-orange.png",
];

const texts = [
  "Fruits de la passion (canette)",
  "Fruits de la passion (bouteille)",
  "Fruits rouges (canette)",
  "Oranges saingunes (canette)",
];

export const Carousel = ({ className }: Props) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [isAnimated, setIsAnimated] = useState<boolean>(false);


  useEffect(() => {
    if (progress >= 100) {
      nextSlide();
    }
  }, [currentIndex, progress]);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          return 0;
        }
        return prevProgress + 1;
      });
    }, 40);

    return () => clearInterval(progressInterval);
  }, [currentIndex]);

  const nextSlide = () => {
    if (!isAnimated) {
      setIsAnimated(true);

      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setProgress(0);

      setTimeout(() => {
        setIsAnimated(false);
      }, 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimated) {
      setIsAnimated(true);

      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
      setProgress(0);
      setTimeout(() => {
        setIsAnimated(false);
      }, 500);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  return (
    <div className={clsx("relative w-full overflow-hidden", className)}>
      <div
        className="flex transition-transform duration-500 h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="relative w-full flex-shrink-0 h-full">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              layout="fill"
              priority
            />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-14 max-md:left-5 transform -translate-y-1/2 p-2 !bg-[#ffffff9f] rounded-full"
      >
        <ArrowIcon
          color="aqua"
          direction="left"
          className="h-[70px] w-[70px] max-sm:h-[30px] max-sm:w-[30px]"
        />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-14 max-md:right-5 transform -translate-y-1/2 p-2 !bg-[#ffffff9f] rounded-full"
      >
        <ArrowIcon
          color="aqua"
          className="h-[70px] w-[70px] max-sm:h-[30px] max-sm:w-[30px]"
        />
      </button>
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 space-x-5 max-sm:bottom-10 max-sm:w-full flex justify-center items-center">
        <Typography
          className={`text-white text-center [text-shadow:4px_4px_0px_rgba(0,0,0,0.50)] font-outfit text-[30px] font-medium leading-normal tracking-[1.5px] max-sm:text-[16px]`}
        >
          {texts[currentIndex]}
        </Typography>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-5 max-sm:space-x-3 max-sm:bottom-5 ">
        {images.map((_, i) => (
          <span
            key={i}
            className={`block h-[5px] cursor-pointer rounded-2xl transition-all w-[106px]  max-sm:w-[42px] animate ${
              currentIndex === i
                ? "bg-white"
                : currentIndex > i
                ? "!bg-white"
                : "bg-[#ffffff7f]"
            }`}
            style={{
              background:
                currentIndex === i
                  ? `linear-gradient(to right, white ${progress}%, #ffffff7f ${progress}%)`
                  : "",
            }}
            onClick={() => goToSlide(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
