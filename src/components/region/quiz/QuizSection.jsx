import { useState } from 'react'
import Button from '../../../common/Button'
import quizData from '../../../data/quiz.json'
import Question from './Question'
import Result from './Result'

const initialScores = {
    mystery: 0,
    coverup: 0,
    missing: 0,
    social: 0,
}

const QuizSection = () => {
    const { questions, results } = quizData

    const [currentQuestion, setCurrentQuestion] = useState(1)
    const [answers, setAnswers] = useState({})
    const [scores, setScores] = useState(initialScores)
    const [result, setResult] = useState(null)

    const getFinalResult = (nextAnswers, nextScores) => {
        const q5 = nextAnswers[5]

        const preferredGroup =
        q5 === 'A' ? ['mystery', 'coverup'] : ['missing', 'social']

        const backupGroup =
        q5 === 'A' ? ['missing', 'social'] : ['mystery', 'coverup']

        const pickBest = group => {
        const sorted = [...group].sort((a, b) => nextScores[b] - nextScores[a])
        const first = sorted[0]
        const second = sorted[1]

        if (nextScores[first] !== nextScores[second]) {
            return first
        }

        if (group.includes('mystery') && group.includes('coverup')) {
            const mysteryCount = [nextAnswers[1], nextAnswers[3]].filter(
            item => item === 'A'
            ).length
            const coverupCount = [nextAnswers[1], nextAnswers[3]].filter(
            item => item === 'B'
            ).length

            return mysteryCount >= coverupCount ? 'mystery' : 'coverup'
        }

        if (group.includes('missing') && group.includes('social')) {
            const missingCount = [nextAnswers[2], nextAnswers[4]].filter(
            item => item === 'A'
            ).length
            const socialCount = [nextAnswers[2], nextAnswers[4]].filter(
            item => item === 'B'
            ).length

            return missingCount >= socialCount ? 'missing' : 'social'
        }

        return first
        }

        const primary = pickBest(preferredGroup)
        const backup = pickBest(backupGroup)

        const finalCategory =
        nextScores[primary] >= nextScores[backup]
            ? primary
            : nextScores[backup] - nextScores[primary] >= 2
            ? backup
            : primary

        return finalCategory
    }

    const handleSelectAnswer = (answer) => {
        const currentData = questions[currentQuestion - 1]
        const questionId = currentData.id

        const nextAnswers = {
        ...answers,
        [questionId]: answer.value,
        }

        const nextScores = { ...scores }

        Object.entries(answer.scores).forEach(([key, value]) => {
        nextScores[key] += value
        })

        setAnswers(nextAnswers)
        setScores(nextScores)

        const isLastQuestion = currentQuestion === questions.length

        if (isLastQuestion) {
        const finalCategory = getFinalResult(nextAnswers, nextScores)
        setResult(results[finalCategory])
        return
        }

        setCurrentQuestion(prev => prev + 1)
    }

    const handleResetQuiz = () => {
        setCurrentQuestion(1)
        setAnswers({})
        setScores(initialScores)
        setResult(null)
    }

    return (
        <section className='px-6 md:px-15 lg:px-30 mt-20 mb-10'>
        <div className='flex flex-col items-center text-center gap-2'>
            <h1 className='text-3xl'>คดีแบบไหนเหมาะกับคุณ ?</h1>
            <p className='text-gray-500'>
            ตอบคำถามง่ายๆ 5 ข้อ เพื่อหาคดีที่เหมาะกับคุณ
            </p>
        </div>

        <div className='flex justify-center bg-[#1a1a1a] p-6 rounded-lg mt-6 py-10 min-h-50'>

            {currentQuestion > 0 && !result && (
                <Question
                    currentQuestion={currentQuestion}
                    questions={questions}
                    handleSelectAnswer={handleSelectAnswer}/>
            )}

            {result && (
                <Result result={result} handleResetQuiz={handleResetQuiz}/>
            )}
        </div>
        </section>
    )
}

export default QuizSection