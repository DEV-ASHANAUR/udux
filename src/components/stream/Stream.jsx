import React from 'react'
import './stream.css'
import patternOne from '../../assets/stream/pattern-01.png'
import patternTwo from '../../assets/stream/pattern-02.png'
import patternThree from '../../assets/stream/pattern-03.png'
import personOne from '../../assets/stream/person-01.png'
import personTwo from '../../assets/stream/person-01.png'
import personThree from '../../assets/stream/person-01.png'
const Stream = () => {
    return (
        <section className='stream_area'>
            <div className="container">
                <div className="stream__heading">
                    <h1>StreamPasses</h1>
                </div>
                {/* filter section */}
                <div className="row stream_passes_desc_filter">
                    <div className="col-lg-7 stream_desc">
                        <p>We have stream passes that work for your location,pocket weight and your content needs. <br /> Our stream passes our valid based on our distribution rights for that live stream.</p>
                    </div>
                    <div className="col-lg-5">
                        <div className="stream_filters">
                            <button className='active'>All</button>
                            <button>Selling Now</button>
                            <button>Coming Soon</button>
                            <button>Post Shows</button>
                        </div>
                    </div>
                </div>
                {/* card section */}
                <div className="row">
                    <div className="col-lg-3">
                        <div className="stream__card__wrapper">
                            <div className="stream__card__top" style={{ backgroundImage: `url(${patternOne})` }}>
                                <div className="stream__card__img">
                                <img src={personOne} alt="person" />
                                </div>
                            </div>
                            <div className="stream__card__body body__one">
                                <div className="card__body__left">
                                    <h2 className='card__body__title'>Davido</h2>
                                    <h2 className='card__body__date'>26-04-2023</h2>
                                </div>
                                <div className="card__body__right">
                                    <h2>icon</h2>
                                    <h2 className='card__body__time'>20:00 hrs</h2>
                                </div>
                            </div>
                            <div className="stream__card__footer ">
                                <button className='stream_btn btn-1'>Buy Stream Pass</button>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </section>
    )
}

export default Stream