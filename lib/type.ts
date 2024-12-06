export interface IQuiz {
  id: number;
  image?: string;
  question: string;
  answer1: string;
  answer2: string;
  answer3?: string;
  correctAnswer: string;
}

export interface IQuizCorrect {
  id: number;
  question: string;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  correctAnswers: string[];
}

export interface IParcours {
  id: number;
  name: string;
  img: string;
  description: string;
  quizList: IQuiz[];
  quizCorrectList: IQuizCorrect[];
  allQuizzes?: [];
}
