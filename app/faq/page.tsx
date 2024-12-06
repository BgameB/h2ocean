"use client";

import React, { useState } from "react";
import { Skull, Anchor, Compass, Map, Sword } from "lucide-react";
import { div } from "framer-motion/client";

const keywordResponses = [
  { keywords: ["nuit", "info", "taverne"], response: "Ah la nuit de l'info, la plus légendaire des îles des caraïbes (après l'île aux singes bien évidemment) où des milliers de pirates se rassemblent pour piller et passer du temps à la taverne!" },
  { keywords: ["pirate", "navire", "aventure", "exploration"], response: "Un navire pirate doit toujours être prêt pour l'aventure ! Il te faut une bonne équipe, des voiles solides et une carte au trésor." },
  { keywords: ["danger", "menace", "navire", "pirate"], response: "Si tu vois un pavillon noir à l'horizon, prépare-toi : ça sent l'abordage !" },
  { keywords: ["peur", "effrayé", "lechuck"], response: "Rien à craindre, matelot, tant qu'on a le vent en poupe, l'équipage à l'écoute et LeChuck bien éloigné." },
  { keywords: ["colle", "répar", "navire"], response: "Un bon pirate sait toujours comment réparer son navire avec de la colle et des planches ! Mais assure-toi qu'elles résistent à l'eau de mer." },
  { keywords: ["singe", "compagnon", "cord"], response: "Un singe à bord ? Pourquoi pas, ils sont agiles et peuvent aider à atteindre les cordages les plus hauts !" },
  { keywords: ["dégueulasse", "propre", "hygiène"], response: "Un navire propre est un navire efficace. Fais attention à l'hygiène, même sur les mers !" },
  { keywords: ["troll", "navigation", "trouble", "prudence"], response: "Si tu croises un troll marin, évite ses eaux troubles et reste sur ta route. Prudence avant tout !" },
  { keywords: ["rhume", "santé", "malade", "vent"], response: "Attraper un rhume en pleine mer peut arriver, surtout avec les vents frais. Reste au chaud et bois un bon grog !" },
  { keywords: ["canon", "bataille", "stratég", "boulet"], response: "Assure-toi que les canons sont bien chargés et les boulets prêts avant toute bataille navale. La stratégie fait aussi la différence !" },
  { keywords: ["aide", "command", "help"], response: "Tout pirate qui se respecte ne demande jamais d'aide. Je vais te donner un conseil par contre: évites à tout prix le repaire de LeChuck sur l'île aux singes!"},
  { keywords: ["lechuck", "danger", "nemesis", "ennemi"], response: "LeChuck, mon ennemi juré. Il est très dangereux donc je te déconseille de trop t'approcher de lui."},
  { keywords: ["singe", "île"], response: "La légendaire île aux singes... Peu sont ceux qui ont pu fouler le sable de cette île."},
];

export default function MonkeyIslandChatbot() {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    {
      text: "Ohé moussaillon! Je me nomme Guybrush Threepwood, pirate de légende, explorateur de l'île aux singes et assistant virtuel. Que puis-je faire pour vous?",
      isUser: false,
    },
  ]);
  const [input, setInput] = useState("");

  const getResponse = (userMessage: string): string => {
    const lowercaseMessage = userMessage.toLowerCase();
  
    const matches = keywordResponses.map(({ keywords, response }) => {
      const matchCount = keywords.filter((keyword) => lowercaseMessage.includes(keyword)).length;
      return { response, matchCount };
    });
  
    const maxMatches = Math.max(...matches.map((match) => match.matchCount));
  
    if (maxMatches === 0) {
      return "Arrr, je ne comprends que le langage pirate, moussaillon!";
    }
  
    const bestMatches = matches.filter((match) => match.matchCount === maxMatches);
  
    return bestMatches[Math.floor(Math.random() * bestMatches.length)].response;
  };
  

  const handleSend = () => {
    if (input.trim()) {
      setMessages((prev) => [...prev, { text: input, isUser: true }]);
      setTimeout(() => {
        const response = getResponse(input);
        setMessages((prev) => [...prev, { text: response, isUser: false }]);
      }, 1000);
      setInput("");
    }
  };

  return (
    <div className="h-screen w-full">
      <div className="flex flex-col h-[500px] mx-auto bg-[url('/wood-texture.jpg')] bg-cover rounded-lg overflow-hidden border-4 border-[#37464F] ">
        <div className="bg-tertiary p-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Capitaine ChatBot</h2>
          <div className="flex space-x-2">
            <Skull className="h-6 w-6" />
            <Anchor className="h-6 w-6" />
            <Compass className="h-6 w-6" />
          </div>
        </div>
        <div className="flex-grow p-4 overflow-y-auto overflow-x-hidden bg-primary">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 ${message.isUser ? "text-right" : "text-left"}`}
            >
              <div
                className={`inline-block p-2 rounded-lg ${
                  message.isUser
                    ? "bg-blue-500 text-white"
                    : "bg-secondary text-white"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 bg-tertiary">
          <div className="flex space-x-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Posez votre question, moussaillon !"
              className="flex-grow text-white rounded-lg p-3 bg-secondary"
            />
            <button
              onClick={handleSend}
              className="bg-primary hover:bg-amber-700 flex p-5 rounded-lg"
            >
              <Map className="h-5 w-5 mr-2" />
              Envoyer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
