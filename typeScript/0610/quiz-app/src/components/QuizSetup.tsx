import React, { useState } from 'react'
import type { QuizConfig } from '../types/quiz';

interface QuizSetupProps {
    onStart: (config: QuizConfig) => void;
}


export default function QuizSetup({ onStart }: QuizSetupProps) {
    const [amount, setAmount] = useState(3);
    const [category, setCategory] = useState(9);
    const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onStart({ amount, category, difficulty });
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>퀴즈 설정</legend>
                    <div>
                        <label htmlFor="amount">문제 수: {amount}개</label>
                        <input type="range" id='amount' min='3' max='10' value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
                    </div>
                    <div>
                        <label htmlFor="category">카테고리</label>
                        <select name="" id="category" value={category} onChange={(e) => setCategory(Number(e.target.value))}>
                            <option value="9">General Knowledge</option>
                            <option value="21">Sports</option>
                            <option value="23">History</option>
                            <option value="24">Politics</option>
                            <option value="25">Art</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="difficulty">난이도</label>
                        <select name="" id="difficulty" value={difficulty} onChange={(e) => setDifficulty(e.target.value as 'easy' | 'medium' | 'hard')}>
                            <option value="easy">쉬움</option>
                            <option value="medium">보통</option>
                            <option value="hard">어려움</option>
                        </select>
                    </div>
                    <button type='submit'>
                        퀴즈 시작하기
                    </button>
                </fieldset>
            </form>
        </section>
    )
}
