import React from 'react'
import heroImage from '../../../assets/images/region/region_hero.png'
import Button from '../../../common/Button'
import { useNavigate } from 'react-router'
import HeroBanner from '../../../common/HeroBanner'

const HeroSection = () => {
    const navigate = useNavigate()
    const handleBack = () => {
        navigate('/')
    }
    return (
        <HeroBanner heroImage={heroImage} handleBack={handleBack}/>
    )
}

export default HeroSection