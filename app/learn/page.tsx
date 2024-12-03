"use server";

import { IParcours } from "@/lib/type";
import PageParcours from "@/ui/page/PageParcours";
import fs from "fs";
import path from "path";

async function getAllParcours(): Promise<IParcours[] | undefined> {
  const filePath = path.join(process.cwd(), "data", "data.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(jsonData).parcours;
}

export default async function LessonPage() {
  const parcours = await getAllParcours();
  if (!parcours) return <p>Parcours introuvable</p>;

  return <PageParcours data={parcours} />;
}
