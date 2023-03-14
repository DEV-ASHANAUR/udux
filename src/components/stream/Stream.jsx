import React from 'react'
import './stream.css'
import patternOne from '../../assets/stream/pattern-01.png'
import patternTwo from '../../assets/stream/pattern-02.png'
import patternThree from '../../assets/stream/pattern-03.png'
import personOne from '../../assets/stream/person-01.png'
import personTwo from '../../assets/stream/person-02.png'
import personThree from '../../assets/stream/person-03.png'
import icon1 from '../../assets/stream/sIcon-01.png'
import icon2 from '../../assets/stream/sIcon-02.png'
import icon3 from '../../assets/stream/sIcon-03.png'
import StreamItem from './StreamItem'
const Stream = () => {
    const streamPasses = [
        {
            title: 'Davido',
            date: '26-04-2023',
            time: '20:00',
            icon: icon1,
            person: personOne,
            freame: patternOne
        },
        {
            title: 'Ayra Starr',
            date: '26-05-2023',
            time: '20:00',
            icon: icon2,
            person: personTwo,
            freame: patternTwo
        },
        {
            title: 'Asake',
            date: '26-05-2023',
            time: '20:00',
            icon: icon3,
            person: personThree,
            freame: patternTwo
        }
    ]
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
                <div className="row stream__card gx-5 gy-5">
                    {
                        streamPasses.map((item,i)=>(
                            <StreamItem key={i} item={item} />
                        ))
                    }
                    
                </div>
            </div>
        </section>
    )
}

export default Stream