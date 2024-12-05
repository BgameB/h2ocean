"use client";

import React, { useState } from "react";

const keywordResponses = [
  { keywords: ["nuit", "info"], response: "Ah la nuit de l'info, la plus légendaire des îles des caraïbes (après l'île aux singes bien évidemment) où des milliers de pirates se rassemblent pour piller et passer du temps à la taverne!" },
  { "keywords": ["pirate", "navire"], "response": "Un navire pirate doit toujours être prêt pour l'aventure ! Il te faut une bonne équipe, des voiles solides et une carte au trésor." },
  { "keywords": ["danger", "menace"], "response": "Si tu vois un pavillon noir à l'horizon, prépare-toi : ça sent l'abordage !" },
  { "keywords": ["vache", "combat"], "response": "C'est une drôle de comparaison... mais peut-être veux-tu parler d'une stratégie de charge frontale ?" },
  { "keywords": ["peur", "effrayé"], "response": "Rien à craindre, matelot, tant qu'on a le vent en poupe et l'équipage à l'écoute." },
  { "keywords": ["charme", "esprit"], "response": "Dans un duel de répliques ou d'esprit, tout est question de répartie et d'assurance !" },
  { "keywords": ["colle", "réparation"], "response": "Un bon pirate sait toujours comment réparer son navire avec de la colle et des planches ! Mais assure-toi qu'elles résistent à l'eau de mer." },
  { "keywords": ["singe", "compagnon"], "response": "Un singe à bord ? Pourquoi pas, ils sont agiles et peuvent aider à atteindre les cordages les plus hauts !" },
  { "keywords": ["dégueulasse", "propreté"], "response": "Un navire propre est un navire efficace. Fais attention à l'hygiène, même sur les mers !" },
  { "keywords": ["troll", "navigation"], "response": "Si tu croises un troll marin, évite ses eaux troubles et reste sur ta route. Prudence avant tout !" },
  { "keywords": ["rhume", "santé"], "response": "Attraper un rhume en pleine mer peut arriver, surtout avec les vents frais. Reste au chaud et bois un bon grog !" },
  { "keywords": ["canon", "bataille"], "response": "Assure-toi que les canons sont bien chargés et les boulets prêts avant toute bataille navale. La stratégie fait aussi la différence !" },
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
      return "Arrr, I don't quite understand ye. Try speakin' like a pirate!";
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
    <div className="w-full max-w-md mx-auto bg-[url('/wood-texture.jpg')] bg-cover rounded-lg shadow-lg overflow-hidden border-4 border-amber-900">
      <div className="bg-amber-900 text-yellow-100 p-4 text-center text-xl font-pirate">
        Guybrush's Help Desk
      </div>
      <div className="h-[400px] p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.isUser ? "justify-end" : "justify-start"
            } mb-4`}
          >
            {!message.isUser && (
              <div className="w-10 h-10 mr-2">
                <img src="/guybrush.png" alt="Guybrush" />
                <div>GT</div>
              </div>
            )}
            <div
              className={`rounded-lg p-2 max-w-[70%] ${
                message.isUser ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 bg-amber-800">
        <div className="flex space-x-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask yer question, ye scurvy dog!"
            className="flex-grow bg-yellow-100 text-amber-900 placeholder-amber-700"
          />
          <button
            onClick={handleSend}
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
