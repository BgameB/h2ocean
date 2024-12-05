"use client";

import React, { useState } from "react";

const keywordResponses = [
  { keywords: ["nuit", "info"], response: "Ah la nuit de l'info, la plus légendaire des îles des caraïbes (après l'île aux singes bien évidemment) où des milliers de pirates se rassemblent pour piller et passer du temps à la taverne!" },
  { keywords: ["pirate", "ship"], response: "Arrr, that be a question worthy of a mighty pirate!" },
  { keywords: ["danger", "threat"], response: "Ye best be careful, or ye might end up in Davy Jones' locker!" },
  { keywords: ["cow", "insult"], response: "How appropriate, ye fight like a cow!" },
  { keywords: ["scared", "frightened"], response: "I'm shakin' in me boots! ...Oh wait, I don't wear boots." },
  { keywords: ["charm", "wit"], response: "Ye can't handle me wit and charm, ye scurvy dog!" },
  { keywords: ["glue", "rubber"], response: "I'm rubber, ye be glue!" },
  { keywords: ["ape", "manners"], response: "I've spoken with apes more polite than you!" },
  { keywords: ["disgusting", "vomit"], response: "There are no words for how disgusting you are... In fact, I just vomited a little in my mouth." },
  { keywords: ["troll", "manners"], response: "Ye've got the manners of a drunken troll!" },
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
