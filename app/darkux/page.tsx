"use client";

import React, { useState, useEffect } from "react";

// ===================
// Composant pour le premier mini-jeu
// ===================
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
  }

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
            backgroundColor: isSuccess === null ? "#007bff" : isSuccess ? "green" : "red",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          {isSuccess === null
            ? "Mini-jeu 1 : Cliquez pour jouer"
            : isSuccess
            ? "Succès ! Cliquez pour rejouer"
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
        if (Math.abs(sliderValue - targetNumber) <= 1) {
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
            backgroundColor: isSuccess === null ? "#007bff" : isSuccess ? "green" : "red",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          {isSuccess === null
            ? "Mini-jeu 2 : Cliquez pour jouer"
            : isSuccess
            ? "Succès ! Cliquez pour rejouer"
            : "Échec ! Cliquez pour réessayer"}
        </button>
      ) : (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <p>
            Sélectionnez le nombre <strong>{targetNumber}</strong> (+/- 1)
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

// ===================
// Composant principal
// ===================
const App: React.FC = () => {
  return (
    <div>
      <MiniGame1 />
      <MiniGame2 />
    </div>
  );
};

export default App;
