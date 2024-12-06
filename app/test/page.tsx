"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Moon, Star, Cloud } from "lucide-react";
import { Anchor, Ship, Fish } from "lucide-react";

export default function TeamPage() {
  const [currentGame, setCurrentGame] = useState(0);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const games = [
    <AnchorDrop
      key="anchor"
      onSuccess={() => handleGameComplete(true)}
      onFailure={() => handleGameComplete(false)}
    />,
    <ShipSteering
      key="ship"
      onSuccess={() => handleGameComplete(true)}
      onFailure={() => handleGameComplete(false)}
    />,
    <FishCatch
      key="fish"
      onSuccess={() => handleGameComplete(true)}
      onFailure={() => handleGameComplete(false)}
    />,
    <StarrySky
      key="stars"
      onSuccess={() => handleGameComplete(true)}
      onFailure={() => handleGameComplete(false)}
    />,
    <MoonPhases
      key="moon"
      onSuccess={() => handleGameComplete(true, 2)}
      onFailure={() => handleGameComplete(false)}
    />,
    <MovingClouds
      key="clouds"
      onSuccess={() => handleGameComplete(true)}
      onFailure={() => handleGameComplete(false)}
    />,
  ];

  const handleGameComplete = (success: boolean, bonusPoints = 1) => {
    if (success) setScore(score + bonusPoints);
    if (currentGame < games.length - 1) {
      setCurrentGame(currentGame + 1);
    } else {
      setIsComplete(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-8">Marine Adventure Captcha</h1>
      {!isComplete ? (
        <>
          <div className="mb-4">
            {/* <Progress
              value={(currentGame / games.length) * 100}
              className="w-[300px]"
            /> */}
          </div>
          {games[currentGame]}
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl mb-4">
            {score >= 5 ? "Verification Successful!" : "Verification Failed"}
          </h2>
          <p>Vous avez obtenu {score} points sur 7 possibles.</p>
          <button onClick={() => window.location.reload()} className="mt-4">
            Réessayer
          </button>
        </div>
      )}
    </div>
  );
}

const AnchorDrop = ({ onSuccess, onFailure }) => {
  const [position, setPosition] = useState(50);
  const [isDropping, setIsDropping] = useState(false);
  const targetRef = useRef(null);

  const handleDrop = () => {
    setIsDropping(true);
    setTimeout(() => {
      const targetRect = targetRef.current.getBoundingClientRect();
      const anchorRect = document
        .getElementById("anchor")
        .getBoundingClientRect();
      if (
        anchorRect.left < targetRect.right &&
        anchorRect.right > targetRect.left &&
        anchorRect.bottom > targetRect.top &&
        anchorRect.top < targetRect.bottom
      ) {
        onSuccess();
      } else {
        onFailure();
      }
    }, 1000);
  };

  return (
    <div className="relative w-[300px] h-[200px] bg-blue-800 overflow-hidden">
      <motion.div
        id="anchor"
        className="absolute top-0"
        style={{ left: `${position}%` }}
        animate={isDropping ? { y: 200 } : {}}
        transition={{ duration: 1 }}
      >
        <Anchor size={32} />
      </motion.div>
      <div
        ref={targetRef}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-yellow-400"
      />
      <input
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        className="absolute bottom-4 w-full"
      />
      <button
        onClick={handleDrop}
        disabled={isDropping}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        Drop Anchor
      </button>
    </div>
  );
};

const ShipSteering = ({ onSuccess, onFailure }) => {
  const [rotation, setRotation] = useState(0);
  const [targetRotation, setTargetRotation] = useState(
    Math.floor(Math.random() * 360)
  );
  const [attempts, setAttempts] = useState(3);

  const handleSteer = () => {
    if (Math.abs(rotation - targetRotation) <= 10) {
      onSuccess();
    } else {
      setAttempts(attempts - 1);
      if (attempts <= 1) {
        onFailure();
      }
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[200px] h-[200px]">
        <Ship
          size={180}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{ transform: `rotate(${targetRotation}deg)` }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-1 h-20 bg-red-500"
          style={{ originY: 1 }}
          animate={{ rotate: rotation }}
        />
      </div>
      <input
        type="range"
        min="0"
        max="359"
        value={rotation}
        onChange={(e) => setRotation(Number(e.target.value))}
        className="w-full mt-4"
      />
      <button onClick={handleSteer} className="mt-4">
        Align Ship
      </button>
      <p className="mt-2">Attempts left: {attempts}</p>
    </div>
  );
};

const FishCatch = ({ onSuccess, onFailure }) => {
  const [fishPosition, setFishPosition] = useState({ x: 0, y: 0 });
  const [netPosition, setNetPosition] = useState({ x: 0, y: 0 });
  const [isCaught, setIsCaught] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFishPosition({
        x: Math.random() * 280,
        y: Math.random() * 180,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (
      Math.abs(fishPosition.x - netPosition.x) < 20 &&
      Math.abs(fishPosition.y - netPosition.y) < 20
    ) {
      setIsCaught(true);
      setTimeout(onSuccess, 500);
    }
  }, [fishPosition, netPosition]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setNetPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className="relative w-[300px] h-[200px] bg-blue-800 cursor-none"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="absolute"
        animate={fishPosition}
        transition={{ type: "spring", damping: 10 }}
      >
        <Fish size={24} className={isCaught ? "text-red-500" : "text-white"} />
      </motion.div>
      <motion.div
        className="absolute w-8 h-8 border-2 border-white rounded-full"
        style={{ left: netPosition.x - 16, top: netPosition.y - 16 }}
      />
    </div>
  );
};

const StarrySky = ({ onSuccess, onFailure }) => {
  const [stars, setStars] = useState([]);
  const [selectedStars, setSelectedStars] = useState([]);
  const [targetStars, setTargetStars] = useState(0);

  useEffect(() => {
    const newStars = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 280,
      y: Math.random() * 180,
    }));
    setStars(newStars);
    setTargetStars(Math.floor(Math.random() * 3) + 3); // Sélectionner entre 3 et 5 étoiles
  }, []);

  const handleStarClick = (id) => {
    if (selectedStars.includes(id)) {
      setSelectedStars(selectedStars.filter((starId) => starId !== id));
    } else {
      setSelectedStars([...selectedStars, id]);
    }
  };

  const handleSubmit = () => {
    if (selectedStars.length === targetStars) {
      onSuccess();
    } else {
      onFailure();
    }
  };

  return (
    <div className="relative w-[300px] h-[200px] bg-blue-900">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className={`absolute cursor-pointer ${
            selectedStars.includes(star.id) ? "text-yellow-300" : "text-white"
          }`}
          style={{ left: star.x, top: star.y }}
          whileHover={{ scale: 1.2 }}
          onClick={() => handleStarClick(star.id)}
        >
          <Star size={16} />
        </motion.div>
      ))}
      <div className="absolute bottom-4 left-0 right-0 text-center text-white">
        Sélectionnez {targetStars} étoiles
      </div>
      <button
        onClick={handleSubmit}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        Valider
      </button>
    </div>
  );
};

// Jeu 2 : Phases de la lune (2 points)
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
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-[300px] h-[200px] bg-blue-800">
      <div className="text-6xl mb-4">{phases[currentPhase]}</div>
      <div className="flex justify-center items-center mb-4">
        <button onClick={() => handlePhaseChange(-1)} className="mr-2">
          ←
        </button>
        <button onClick={() => handlePhaseChange(1)} className="ml-2">
          →
        </button>
      </div>
      <div className="text-white mb-2">
        Trouvez cette phase : {phases[targetPhase]}
      </div>
      <button onClick={handleSubmit}>Valider</button>
      <div className="text-white mt-2">Essais restants : {attempts}</div>
    </div>
  );
};

// Jeu 3 : Nuages mouvants (1 point)
const MovingClouds = ({ onSuccess, onFailure }) => {
  const [position, setPosition] = useState(50);
  const [cloudPosition, setCloudPosition] = useState(Math.random() * 80 + 10);
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    if (isMoving) {
      const interval = setInterval(() => {
        setCloudPosition((prev) => {
          if (prev <= 0 || prev >= 100) {
            clearInterval(interval);
            setIsMoving(false);
            onFailure();
            return 50;
          }
          return prev + (Math.random() - 0.5) * 5;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isMoving]);

  const handleStart = () => {
    setIsMoving(true);
  };

  const handleStop = () => {
    setIsMoving(false);
    if (Math.abs(position - cloudPosition) < 10) {
      onSuccess();
    } else {
      onFailure();
    }
  };

  return (
    <div className="relative w-[300px] h-[200px] bg-blue-400">
      <motion.div
        className="absolute top-4"
        style={{ left: `${cloudPosition}%` }}
        animate={isMoving ? { y: [0, -10, 0] } : {}}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <Cloud size={32} className="text-white" />
      </motion.div>
      <input
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        className="absolute bottom-12 w-full"
      />
      <div
        className="absolute bottom-8 w-1 h-8 bg-blue-600"
        style={{ left: `${position}%` }}
      />
      <button
        onClick={isMoving ? handleStop : handleStart}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
      >
        {isMoving ? "Arrêter" : "Démarrer"}
      </button>
    </div>
  );
};

export { StarrySky, MoonPhases, MovingClouds };
