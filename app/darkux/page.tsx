"use client";

import React, { useState, useEffect, useRef } from "react";

const MiniGameButton: React.FC = () => {
  const [gameActive, setGameActive] = useState(false);
  const [position, setPosition] = useState(0); // Position du point
  const [direction, setDirection] = useState(1); // Direction (1 = droite, -1 = gauche)
  const [isSuccess, setIsSuccess] = useState(false); // État de réussite
  const barRef = useRef<HTMLDivElement>(null); // Référence à la barre
  const greenZoneStart = 40; // Début de la zone verte (en %)
  const greenZoneEnd = 60; // Fin de la zone verte (en %)

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

  // Gérer la pression sur la barre d'espace
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
    <div>
      {!gameActive ? (
        <button
          onClick={() => {
            setGameActive(true);
            setIsSuccess(false);
            setPosition(0);
            setDirection(1);
          }}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: isSuccess ? "green" : "red",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          {isSuccess ? "Succès ! Cliquez pour rejouer" : "Cliquez pour jouer"}
        </button>
      ) : (
        <div
          ref={barRef}
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

export default MiniGameButton;