
// 퀴즈 설정에 대한 인터페이스
export interface QuizConfig {
    amount: number;
    category: number;
    difficulty: 'easy' | 'medium' | 'hard';
}

// api에서 받아오는 퀴즈 정보의 형식을 정의하는 인터페이스
export interface QuizQuestion {
    type: "multiple",
    difficulty: 'easy' | 'medium' | 'hard',
    category: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[]
}

// 퀴즈 결과에서 사용할 정보의 형식을 정의하는 인터페이스
export interface QuizSummary {
    score: number;
    totalQuestions: number;
    correctAnswers: number;
}