"use client";

import React from "react";
import { useUser } from "@/context/UserContext";

interface PlayerProfileProps {
  level: number;
  maxLevel: number;
  xp: number;
}

const ProgressBar = ({ current, max }: { current: number; max: number }) => {
  const percentage = (Math.min(Math.max(current, 0), max) / max) * 100;

  return (
    <div className="relative h-4 w-full overflow-hidden rounded-full bg-gray-200">
      <div
        className="absolute left-0 top-0 h-full transition-all rounded-full"
        style={{ width: `${percentage}%`, backgroundColor: "#30df95" }}
      />
    </div>
  );
};

function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`${className}`} {...props} />;
}

Card.Header = function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
  );
};

Card.Title = function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={`text-3xl font-semibold leading-none tracking-tight ${className}`}
      {...props}
    />
  );
};

Card.Content = function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`p-6 pt-0 ${className}`} {...props} />;
};

export default function PlayerProfileQuests({
  level,
  maxLevel,
  xp,
}: PlayerProfileProps) {
  const { user } = useUser();

  return (
    <Card className="w-full max-w-md mx-auto">
      <Card.Header>
        <Card.Title className="text-center">Bienvenue dans vos quêtes {user.username}</Card.Title>
      </Card.Header>
      <Card.Content className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="text-md font-semibold">Niveau {level}</h3>
            <p className="text-md text-muted-foreground">
              {level}/{maxLevel}
            </p>
          </div>
          <ProgressBar current={level} max={maxLevel} />
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">XP :</h3>
          <p className="text-lg font-bold">{xp}</p>
        </div>
      </Card.Content>
    </Card>
  );
}
