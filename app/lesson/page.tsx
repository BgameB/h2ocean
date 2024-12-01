"use server";

import { IParcours } from "@/lib/type";
import PageLesson from "@/ui/page/PageLesson";
import fs from "fs";
import path from "path";

async function getParcours(id: number) {
  const filePath = path.join(process.cwd(), "data", "data.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const { parcours } = JSON.parse(jsonData);
  return parcours.find((parcours: IParcours) => parcours.id === id);
}

export default async function LessonPage() {
  const parcours = await getParcours(1);
  if (!parcours) return <p>Parcours introuvable</p>;

  // Transfert des données au composant client
  return <PageLesson data={parcours} />;
}
