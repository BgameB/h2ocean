"use client";

import { useUser } from "@/context/UserContext";

export default function Home() {
  const { user, addGems, changeUsername, resetUser } = useUser();

  return (
    <div className="flex">
      <div>
        <h1>Session utilisateur</h1>
        <p>
          <strong>Pseudo :</strong> {user.username}
        </p>
        <p>
          <strong>Gems :</strong> {user.gems}
        </p>

        <button onClick={() => addGems(10)}>Ajouter 10 gems</button>
        <button
          onClick={() =>
            changeUsername(prompt("Entrez un nouveau pseudo") || user.username)
          }
        >
          Changer de pseudo
        </button>
        <button onClick={resetUser}>Réinitialiser les données</button>
      </div>
    </div>
  );
}
