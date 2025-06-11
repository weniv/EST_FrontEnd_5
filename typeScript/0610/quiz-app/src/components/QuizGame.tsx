import React, { useEffect, useState } from 'react'
import type { QuizQuestion, QuizSummary } from '../types/quiz'
import he from 'he';

interface QuizGameProps {
    questions: QuizQuestion[];
    onComplete: (result: QuizSummary) => void;
}

export default function QuizGame({ questions, onComplete }: QuizGameProps) {

    // 순서가 섞인 문제 목록
    const [shuffledAnswers, setShuffledAnswers] = useState<string[][]>([]);

    // 현재 문제 번호
    const [currentIndex, setCurrentIndex] = useState(0);

    // 사용자가 선택한 문제 보기 정보
    const [answers, setAnswers] = useState<string[]>(new Array(questions.length).fill(''));

    useEffect(() => {
        const shuffled = questions.map(question => {
            return [question.correct_answer, ...question.incorrect_answers].sort(() => Math.random() - 0.5);
        });
        console.log(shuffled);
        setShuffledAnswers(shuffled);

    }, []);

    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        }
    }

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    }

    const handleAnswerSelect = (answer: string) => {
        const newAnswers = [...answers];
        newAnswers[currentIndex] = answer;
        setAnswers(newAnswers);
    }

    // 결과 채점함수
    const handleSubmit = () => {
        const correctAnswerCount = questions.reduce((count, question, index) => {
            // 현재 문제의 정답과 사용자의 답안이 일치하면 +1, 아니면 0을 더한다.
            return count + (answers[index] === question.correct_answer ? 1 : 0)
        }, 0);

        onComplete({
            score: (correctAnswerCount / questions.length) * 100,
            totalQuestions: questions.length,
            correctAnswers: correctAnswerCount
        });
        console.log('handler');
    }

    if (shuffledAnswers.length === 0) {
        return <div>Loading...</div>
    }

    const currentQuestion = questions[currentIndex];

    return (
        <section>
            <div>문제: {currentIndex + 1} / {questions.length}</div>
            <div>
                <h2>{he.decode(currentQuestion.question)}</h2>
                <ul>
                    {
                        shuffledAnswers[currentIndex].map((answer, index) => {
                            return (
                                <li key={index}>
                                    <input type="radio" name='answer' value={answer} id={`answer-${index}`} onChange={() => handleAnswerSelect(answer)} checked={answers[currentIndex] === answer} />
                                    {/* checked={answers[currentIndex] === answer} ==> 사용자가 선택한 정답이 이 input의 값과 같다면 체크 활성화 */}
                                    <label htmlFor={`answer-${index}`}>{answer}</label>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>
            <div>
                <button onClick={handlePrevious}>이전</button>
                {
                    currentIndex === questions.length - 1 ? <button onClick={handleSubmit}>제출하기</button> : <button onClick={handleNext}>다음</button>
                }
            </div>
        </section>
    )
}
