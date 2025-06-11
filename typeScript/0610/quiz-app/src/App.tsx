import { useState } from "react";
import type { QuizConfig, QuizQuestion, QuizSummary } from "./types/quiz";
import QuizSetup from "./components/QuizSetup";
import QuizGame from "./components/QuizGame";
import QuizResult from "./components/QuizResult";

enum QuizStep {
  SETUP,
  PLAYING,
  RESULT
}

function App() {

  // 현재 퀴즈의 진행 상태
  const [step, setStep] = useState(QuizStep.SETUP);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [result, setResult] = useState<QuizSummary | null>(null);

  const startQuiz = async (config: QuizConfig) => {

    try {
      const url = new URL('https://opentdb.com/api.php');
      // https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple
      url.searchParams.append('amount', config.amount.toString());
      url.searchParams.append('category', config.category.toString());
      url.searchParams.append('difficulty', config.difficulty);
      url.searchParams.append('type', 'multiple');

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('퀴즈 데이터를 불러오는데 문제가 발생했습니다!!');
      }

      const data = await response.json();

      setQuestions(data.results);
      setStep(QuizStep.PLAYING);

    } catch (error) {
      console.error(error);
    }

  }

  const QuizOver = (quizSummary: QuizSummary) => {
    setResult(quizSummary);
    setStep(QuizStep.RESULT);
  }


  return (
    <>
      <header>
        <h1>퀴즈 챌린지</h1>
      </header>
      <main>
        {step === QuizStep.SETUP && <QuizSetup onStart={startQuiz} />}
        {step === QuizStep.PLAYING && <QuizGame questions={questions} onComplete={QuizOver} />}
        {step === QuizStep.RESULT && <QuizResult result={result} />}
      </main>
    </>
  )
}

export default App
