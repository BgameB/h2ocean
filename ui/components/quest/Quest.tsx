import clsx from "clsx";
import Image from "next/image";

import defaultIcon from "@/public/vercel.svg";
import { useEffect, useState } from "react";

interface Props {
  /* Props Case globale */
  id: number;
  className?: string;
  text: string;
  reward: string;
  current: number;
  max: number;
  color: string;

  icon?: any;
}

const ProgressBar = ({
  current,
  max,
  color,
}: {
  current: number;
  max: number;
  color: string;
}) => {
  const percentage = (Math.min(Math.max(current, 0), max) / max) * 100;

  return (
    <div className="relative h-4 w-full overflow-hidden rounded-full bg-gray-200">
      <div
        className="absolute left-0 top-0 h-full transition-all "
        style={{ width: `${percentage}%`, backgroundColor: color }}
      />
    </div>
  );
};

export const Quest = ({
  id,
  className,
  text,
  color = "#ffffff",
  icon = { defaultIcon },
  reward,
  current,
  max,
}: Props) => {
  return (
    <div
      className={clsx(
        "grid grid-cols-2 p-[25px] gap-[20px] max-sm:flex max-sm:flex-col",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <div className="text-white font-bold text-xl">Quête {id} :</div>
        <div className="text-white font-normal text-lg">{text}</div>
      </div>
      <div className="relative">
        <ProgressBar current={current} max={max} color={color} />

        <div className="text-slate-300 text-base mt-2">
          {current}/{max}
        </div>
        {current === max &&
          (Math.floor(Math.random() * 2) === 1 ? <MiniGame2 /> : <MiniGame1 />)}
        {current !== max && (
          <div
            className={`badge cursor-pointer ${
              current === max ? "bg-[#1CB0F6]" : "bg-gray-600"
            } text-white text-base rounded-sm px-3 mt-3 py-1`}
          >
            {current === max ? "🎉 Quête Terminée" : "Quête en cours"}
          </div>
        )}
        <div className="text-slate-200 font-medium text-lg mt-2">
          Récompense : {reward}
        </div>
      </div>
    </div>
  );
};

export default Quest;

const MiniGame1: React.FC = () => {
  const [gameActive, setGameActive] = useState(false);
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const [greenZoneStart, setGreenZoneStart] = useState(0); // Début de la zone verte (en %)
  const [greenZoneEnd, setGreenZoneEnd] = useState(0);

  const generateGreenZone = () => {
    const start = Math.floor(Math.random() * 95);
    const end = start + 5;
    setGreenZoneStart(start);
    setGreenZoneEnd(end);
  };

  useEffect(() => {
    let animation: number | null = null;

    if (gameActive) {
      animation = window.setInterval(() => {
        setPosition((prev) => {
          const nextPos = prev + direction * 2; // Vitesse de déplacement
          if (nextPos > 100) {
            setDirection(-1); // Demi-tour à droite
            return 100;
          }
          if (nextPos < 0) {
            setDirection(1); // Demi-tour à gauche
            return 0;
          }
          return nextPos;
        });
      }, 16); // Mise à jour à ~60 FPS
    }

    return () => {
      if (animation) clearInterval(animation);
    };
  }, [gameActive, direction]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === "Space" && gameActive) {
      if (position >= greenZoneStart && position <= greenZoneEnd) {
        setIsSuccess(true); // Succès
      } else {
        setIsSuccess(false); // Échec
      }
      setGameActive(false); // Fin du jeu
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [gameActive, position]);

  return (
    <div style={{ textAlign: "center" }}>
      {!gameActive ? (
        <button
          onClick={() => {
            generateGreenZone();
            setGameActive(true);
            setIsSuccess(null); // Réinitialise le statut
            setPosition(0);
            setDirection(1);
          }}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor:
              isSuccess === null ? "#007bff" : isSuccess ? "green" : "red",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          {isSuccess === null
            ? "Mini-jeu 1 : Cliquez pour jouer"
            : isSuccess
            ? "Succès ! Bien joué vous avez le droit de rejouer"
            : "Échec ! Cliquez pour réessayer"}
        </button>
      ) : (
        <div
          style={{
            position: "relative",
            width: "300px",
            height: "20px",
            backgroundColor: "#ddd",
            margin: "20px auto",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: `${greenZoneStart}%`,
              width: `${greenZoneEnd - greenZoneStart}%`,
              height: "100%",
              backgroundColor: "green",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: `${position}%`,
              width: "10px",
              height: "10px",
              backgroundColor: "blue",
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
      )}
    </div>
  );
};

// ===================
// Composant pour le deuxième mini-jeu
// ===================
const MiniGame2: React.FC = () => {
  const [gameActive, setGameActive] = useState(false);
  const [targetNumber, setTargetNumber] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  // Gère le compte à rebours
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (gameActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    if (timeLeft === 0) {
      setGameActive(false);
      if (Math.abs(sliderValue - targetNumber) <= 2) {
        setIsSuccess(true); // Succès
      } else {
        setIsSuccess(false); // Échec
      }
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [gameActive, timeLeft]);

  const startGame = () => {
    setTargetNumber(Math.floor(Math.random() * 2001)); // Nombre cible
    setSliderValue(0);
    setTimeLeft(10);
    setGameActive(true);
    setIsSuccess(null);
  };

  return (
    <div style={{ textAlign: "center" }}>
      {!gameActive ? (
        <button
          onClick={startGame}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor:
              isSuccess === null ? "#007bff" : isSuccess ? "green" : "red",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          {isSuccess === null
            ? "Mini-jeu 2 : Cliquez pour jouer"
            : isSuccess
            ? "Succès ! Bien joué vous avez le droit de rejouer"
            : "Échec ! Cliquez pour réessayer"}
        </button>
      ) : (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <p>
            Sélectionnez le nombre <strong>{targetNumber}</strong> (+/- 2)
          </p>
          <input
            type="range"
            min="0"
            max="2000"
            value={sliderValue}
            onChange={(e) => setSliderValue(Number(e.target.value))}
            onKeyDown={(e) => e.preventDefault()} // Désactive les flèches du clavier
            style={{ width: "80%" }}
          />
          <p>Valeur actuelle : {sliderValue}</p>
          <p>Temps restant : {timeLeft} secondes</p>
        </div>
      )}
    </div>
  );
};
