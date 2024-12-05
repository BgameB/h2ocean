"use client";

import React, { useState } from "react";
import { Skull, Anchor, Compass, Map, Sword } from "lucide-react";
import { div } from "framer-motion/client";

const responses = [
  "Ahoy there! Ye be needin' help with yer grog selection?",
  "Arrr, that be a question worthy of a mighty pirate!",
  "Ye best be careful, or ye might end up in Davy Jones' locker!",
  "How appropriate, ye fight like a cow!",
  "I'm shakin' in me boots! ...Oh wait, I don't wear boots.",
  "Ye can't handle me wit and charm, ye scurvy dog!",
  "I'm rubber, ye be glue!",
  "I've spoken with apes more polite than you!",
  "There are no words for how disgusting you are... In fact, I just vomited a little in my mouth.",
  "Ye've got the manners of a drunken troll!",
];

export default function MonkeyIslandChatbot() {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>(
    [
      {
        text: "AHAHA ChatBOT",
        isUser: false,
      },
    ]
  );
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages((prev) => [...prev, { text: input, isUser: true }]);
      setTimeout(() => {
        const response =
          responses[Math.floor(Math.random() * responses.length)];
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
