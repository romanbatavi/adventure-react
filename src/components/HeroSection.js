import React from 'react'
import { Button } from './Button'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/src/videos/video-2.mp4' autoPlay loop muted />
            {/* ini pake src */}
            <h1>ADVENTURE AWAITS</h1>
            <p>WHAT R U WAITING FOR ?</p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'>
                        GET STARTED
                </Button>
            </div>
        </div>
    )
}

export default HeroSection