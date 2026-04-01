import React from 'react'
import { useNavigate } from 'react-router'
import heroImage from '../../../assets/images/region/region_hero.png'
import HeroBanner from '../../../common/HeroBanner'

const HeroSection = () => {
    const navigate = useNavigate()
    const handleBack = () => {
        navigate('/')
    }

    return (
        <HeroBanner heroImage={heroImage} handleBack={handleBack} text="สำรวจคดีเด่นในไทยตามพื้นที่"/>
    )
}

export default HeroSection