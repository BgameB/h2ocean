"use server";

import { IParcours, IQuiz, IQuizCorrect } from "@/lib/type";
import PageLesson from "@/ui/page/PageLesson";
import fs from "fs";
import path from "path";

// Fonction pour mélanger un tableau
function shuffleArray<T>(array: T[]): T[] {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

// Fonction pour récupérer les données du parcours et les mélanger
async function getParcours(id: number): Promise<IParcours | undefined> {
  const filePath = path.join(process.cwd(), "data", "data.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const { parcours } = JSON.parse(jsonData);

  const parcoursData = parcours.find((p: IParcours) => p.id === id);
  if (!parcoursData) return undefined;

  // Fusionner et mélanger les quiz
  const allQuizzes = shuffleArray([
    ...parcoursData.quizList.map((quiz: IQuiz) => ({ ...quiz, type: "quiz" })),
    ...parcoursData.quizCorrectList.map((quiz: IQuizCorrect) => ({
      ...quiz,
      type: "quizCorrect",
    })),
  ]);

  return { ...parcoursData, allQuizzes }; // Inclure la liste mélangée dans les données du parcours
}

export default async function LessonPage() {
  const parcours = await getParcours(1); // ID en dur pour l'exemple
  if (!parcours) return <p>Parcours introuvable</p>;

  return <PageLesson data={parcours} />;
}
