"use client";

import { loadFromLocalStorage, saveToLocalStorage } from "@/lib/crypto";
import React, { createContext, useContext, useEffect, useState } from "react";

interface UserData {
  username: string;
  gems: number;
}

interface UserContextType {
  user: UserData;
  setUser: (user: UserData) => void;
  addGems: (amount: number) => void;
  changeUsername: (newUsername: string) => void;
  resetUser: () => void;
}

const DEFAULT_USER: UserData = {
  username: "Invité",
  gems: 0,
};

const LOCAL_STORAGE_KEY = "userData";

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserData>(DEFAULT_USER);

  useEffect(() => {
    const savedUser = loadFromLocalStorage(
      LOCAL_STORAGE_KEY
    ) as UserData | null;
    if (savedUser && savedUser.username && savedUser.gems >= 0) {
      setUser(savedUser);
    } else {
      console.warn("Données corrompues ou absentes, réinitialisation...");
      resetUser();
    }
  }, []);

  useEffect(() => {
    saveToLocalStorage(LOCAL_STORAGE_KEY, user);
  }, [user]);

  const addGems = (amount: number) => {
    setUser((prev) => ({ ...prev, gems: prev.gems + amount }));
  };

  const changeUsername = (newUsername: string) => {
    setUser((prev) => ({ ...prev, username: newUsername }));
  };

  const resetUser = () => {
    setUser(DEFAULT_USER);
    saveToLocalStorage(LOCAL_STORAGE_KEY, DEFAULT_USER);
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, addGems, changeUsername, resetUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser doit être utilisé dans un UserProvider");
  }
  return context;
};
