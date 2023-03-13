import React from 'react'
import './hero.css'

const Hero = () => {
    return (
        <section className='hero__area'>
            <div className="container">
                <div className="hero__heading__wrapper">
                    <h1>Africa to the World</h1>
                    <p>The best seats in the most iconic music venues across the globe, join uduX as we livestream Africa's brightest in music as they continue to conquer the world.</p>
                    <div>
                        <button className='site_button'>Buy Stream Pass</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero