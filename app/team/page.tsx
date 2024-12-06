"use client";

import { motion } from "framer-motion";

import Image from "next/image";
import { useEffect, useState } from "react";
import van from "@/img/picture/van.png";
import { AnimatePresence } from "framer-motion";
import { MoveLeft, MoveRight } from "lucide-react";

const MoonPhases = ({ onSuccess, onFailure }) => {
  const phases = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"];
  const [currentPhase, setCurrentPhase] = useState(0);
  const [targetPhase, setTargetPhase] = useState(0);
  const [attempts, setAttempts] = useState(3);

  useEffect(() => {
    setTargetPhase(Math.floor(Math.random() * phases.length));
  }, []);

  const handlePhaseChange = (direction) => {
    setCurrentPhase(
      (prev) => (prev + direction + phases.length) % phases.length
    );
  };

  const handleSubmit = () => {
    if (currentPhase === targetPhase) {
      onSuccess(2); // Ce jeu vaut 2 points
    } else {
      setAttempts(attempts - 1);
      if (attempts <= 1) {
        onFailure();
        window.location.href = "/learn";
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-[300px] h-[200px] bg-tertiary rounded-lg">
      <div className="text-6xl mb-4">{phases[currentPhase]}</div>
      <div className="flex justify-center items-center mb-4">
        <button
          onClick={() => handlePhaseChange(-1)}
          className="mr-2 px-3 py-1 bg-secondary text-white rounded-[8px] font-dinroundpro font-bold tracking-[1.5px] p-[10px] hover:opacity-90 cursor-pointer w-full"
        >
          <MoveLeft />
        </button>
        <button
          onClick={() => handlePhaseChange(1)}
          className="ml-2 px-3 py-1 bg-secondary text-white rounded-[8px] font-dinroundpro font-bold tracking-[1.5px] p-[10px] hover:opacity-90 cursor-pointer w-full"
        >
          <MoveRight />
        </button>
      </div>
      <div className="text-white text-[20px] font-semibold mb-[15px]">
        Trouvez cette phase : {phases[targetPhase]}
      </div>
      <button
        onClick={handleSubmit}
        className="px-4 py-2 rounded-[8px] bg-green font-dinroundpro font-bold tracking-[1.5px] p-[10px] hover:opacity-90 cursor-pointer w-full"
      >
        Valider
      </button>
      <div className="text-white mt-2">
        Essais restants : <span className="font-bold">{attempts}</span>
      </div>
    </div>
  );
};

export default function TeamPage() {
  const [showCaptcha, setShowCaptcha] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0, rotation: 0 });
  const [isVisible, setIsVisible] = useState(true);

  const handleCaptchaSuccess = () => {
    setShowCaptcha(false);
  };

  const handleCaptchaFailure = () => {
    setShowCaptcha(false);
  };

  const getRandomPosition = () => {
    const positions = [
      {
        x: -3,
        y: Math.random() * 80 + 10,
        rotation: Math.random() * 360,
      },
      {
        x: 93,
        y: Math.random() * 80 + 10,
        rotation: Math.random() * 360,
      },
    ];
    return positions[Math.floor(Math.random() * positions.length)];
  };

  const handleHover = () => {
    setIsVisible(false);
    setTimeout(() => {
      setPosition(getRandomPosition());
      setIsVisible(true);
    }, 300);

    const vanVariants = {
      hover: { scale: 0.9 },
      tap: { scale: 0.95 },
    };
  };
  const data = [
    {
      name: "Romain CABARET",
      desc: "Pilier stratégique",
      imgSrc: "/img/team/Romain-pp.jpeg",
      imgAlt: "Avatar",
      githubURL: "https://github.com/RomainCabaret",
      linkedIn: "https://www.linkedin.com/in/cabaret-romain",
    },
    {
      name: "Olivier Warchol",
      desc: "Esprit analytique et approche méthodique",
      imgSrc: "/img/team/Olivier_pp.jpeg",
      imgAlt: "Avatar",
      githubURL: "https://github.com/strik0w0",
      linkedIn: "https://www.linkedin.com/in/owarchol/",
    },
    {
      name: "Brice Verger--Doucy",
      desc: "Visionnaire technique",
      imgSrc: "/img/team/Brice-pp.png",
      imgAlt: "Avatar",
      githubURL: "https://github.com/BgameB/",
      linkedIn: "https://www.linkedin.com/in/vergerdoucybrice/",
    },
  ];

  return (
    <section className="mb-[100px] relative overflow-hidden">
      <div className="max-w-screen-xl">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
            Notre Equipe
          </h2>
          <p className="font-light lg:mb-16 sm:text-xl text-gray-400">
            "L'individualité fait la différence, mais c'est l'unité qui fait la
            force."
          </p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16">
          {data.map((member, i) => (
            <div
              className="overflow-hidden items-center rounded-[15px]  sm:flex bg-tertiary border-[#37464F] border-[3px] shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]"
              key={i}
            >
              <a href="#">
                <img
                  className="rounded-[15px] h-full w-[285px] sm:rounded-none sm:rounded-l-lg max-sm:h-[285px] max-sm:mx-auto"
                  src={member.imgSrc}
                  alt={member.imgAlt}
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-white">
                  <a href="#">{member.name}</a>
                </h3>
                <span className="text-gray-400 max-sm:text-center">
                  Développeur WEB
                </span>
                <p className="mt-3 mb-4 font-light text-gray-400">
                  {member.desc}
                </p>
                <ul className="flex space-x-4 sm:mt-0">
                  <li>
                    <a
                      href={member.githubURL}
                      target="_blank"
                      className="text-gray-500 hover:text-white"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href={member.linkedIn}
                      target="_blank"
                      className="text-gray-500 hover:text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ))}

          {/* ------------------------ */}
        </div>
      </div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key={`${position.x}-${position.y}`}
            style={{
              left: `${position.x}%`,
              top: `${position.y}%`,
              transform: "translate(-50%, -50%)",
            }}
            className="absolute"
            initial={{ opacity: 0, scale: 0.5, rotate: position.rotation }}
            animate={{ opacity: 1, scale: 1, rotate: position.rotation }}
            exit={{ opacity: 0, scale: 0.5, rotate: position.rotation }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <motion.div
              className="relative w-32 cursor-pointer pointer-events-auto"
              onMouseEnter={handleHover}
              whileHover={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={van}
                alt="Easter egg van"
                width={350}
                height={350}
                className="transform transition-transform duration-300 unicorn-cursor"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="mt-6"
        >
          {showCaptcha && (
            <div className="inset-[0px]  max-md:left-[0px] left-[300px] flex items-center justify-center bg-opacity-50 z-50 fixed bg-background">
              <div className="p-8 text-center bg-tertiary/80 rounded-[15px] border-[#37464F] border-[3px]">
                <MoonPhases
                  onSuccess={handleCaptchaSuccess}
                  onFailure={handleCaptchaFailure}
                />
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
