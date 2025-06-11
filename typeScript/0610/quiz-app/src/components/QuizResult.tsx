import React from 'react'
import type { QuizSummary } from '../types/quiz'

interface QuizResultProps {
    result: QuizSummary
}

export default function QuizResult({ result }: QuizResultProps) {
    return (
        <>
            <div>QuizResult</div>
            <h2>{result.score}</h2>
        </>
    )
}
