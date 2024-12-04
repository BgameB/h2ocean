"use server";

import { IParcours, IQuiz, IQuizCorrect } from "@/lib/type";
import PageLesson from "@/ui/page/PageLesson";
import fs from "fs";
import path from "path";

function shuffleArray<T>(array: T[]): T[] {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

async function getParcours(id: number): Promise<IParcours | undefined> {
  const filePath = path.join(process.cwd(), "data", "data.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const { parcours } = JSON.parse(jsonData);

  const parcoursData = parcours.find((p: IParcours) => p.id === id);
  if (!parcoursData) return undefined;

  const allQuizzes = shuffleArray([
    ...parcoursData.quizList.map((quiz: IQuiz) => ({ ...quiz, type: "quiz" })),
    ...parcoursData.quizCorrectList.map((quiz: IQuizCorrect) => ({
      ...quiz,
      type: "quizCorrect",
    })),
  ]);

  return { ...parcoursData, allQuizzes };
}

export default async function LessonPage() {
  const parcours = await getParcours(1);
  if (!parcours) return <p>Parcours introuvable</p>;

  return <PageLesson data={parcours} />;
}
