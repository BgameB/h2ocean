import Quiz from "@/ui/components/quiz/Quiz";
import QIncorrect from "@/ui/components/quiz/QIncorrect";
import QCorrect from "@/ui/components/quiz/QCorrect";

import VercelIcon from "@/public/vercel.svg";

export default function LearnPage() {
  return (
    <div className="flex ">
      <Quiz
        id={1}
        image={VercelIcon}
        answer1="Carré"
        answer2="Rectangle"
        answer3="Triangle"
        correctAnswer="Triangle"
        color="#0F121E"
      />

      <QCorrect
        question="Quelles sont les deux plus grandes planètes du système solaire ?"
        answer1="Mars"
        answer2="Jupiter"
        answer3="Saturne"
        answer4="Vénus"
        correctAnswer1="Jupiter"
        correctAnswer2="Saturne"
        color="#0F121E"
      />
    </div>
  );
}
