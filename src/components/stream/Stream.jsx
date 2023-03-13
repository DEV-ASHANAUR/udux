import React from 'react'
import './stream.css'
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
                {/* <div className="row">
                    .col-lg-
                </div> */}
            </div>
        </section>
    )
}

export default Stream