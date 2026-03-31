import React from 'react'
import HeroSection from '../components/region/hero/HeroSection'
import MapSection from '../components/region/map/MapSection'
import QuizSection from '../components/region/quiz/QuizSection'

const RegionsPage = () => {
    return (
        <div>
            <HeroSection />
            <MapSection />
            <QuizSection />
        </div>
    )
}

export default RegionsPage