import React from 'react'

const Question = ({ currentQuestion, questions, handleSelectAnswer }) => {
    return (
        <div className='w-full max-w-2xl'>
            <p className='text-sm text-gray-400 mb-3'>
            คำถาม {currentQuestion} / {questions.length}
            </p>
            <div className='w-full h-2 bg-[#BBBBBB33] rounded-full overflow-hidden mb-6'>
                <div className='h-full bg-[#EB3F34] rounded-full transition-all duration-300' style={{ width: `${(currentQuestion / questions.length) * 100}%` }}/>
            </div>

            <h2 className='text-xl mb-6 text-white'>
            {currentQuestion}. {questions[currentQuestion - 1].question}
            </h2>

            <div className='flex flex-col gap-3'>
            {questions[currentQuestion - 1].answers.map(answer => (
                <button
                key={`${questions[currentQuestion - 1].id}-${answer.value}`}
                className='flex-1 bg-[#BBBBBB33] hover:bg-[#EB3F34] text-white px-4 py-3 rounded-full cursor-pointer transition'
                onClick={() => handleSelectAnswer(answer)}
                >
                {answer.text}
                </button>
            ))}
            </div>
        </div>
    )
}

export default Question