import React from 'react'
import './partnar.css'
import patLogo1 from '../../assets/patner/patner-logo-01.svg'
import patLogo2 from '../../assets/patner/patner-logo-02.svg'
import coverImg from '../../assets/patner/parner-cover.png'
const Partner = () => {
    return (
        <div className='partner__area'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className='partner__heading'>Brought to you by</h1>
                        <div className="partner__logo">
                            <img src={patLogo1} alt="patner" />
                            <img src={patLogo2} alt="patner" />
                        </div>
                        <div className="partner__desc__wrapper">
                            <p className='partner__desc'>We are Africa’s first and indigenous subscription-based music store and streaming service.</p>

                            <p className='partner__desc'> We believe in the potential of Africa’s sound and use technology to amplify this belief.</p>

                            <p className='partner__desc'>We combine high-quality audio and high-definition video to innovate what we call experiential technology.</p>

                            <p className='partner__desc'> We’ve brought you Davido + Wizkid live from the o2, we’re bringing collaborative playlists and promise to continue to push the boundaries - ensuring that Africa retains it’s deserved spot on the global music stage.</p>
                        </div>

                    </div>
                    <div className="col-lg-6">
                        <div className="patner__cover__wrapper">
                            <img src={coverImg} alt="patner_cover" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="blank"></div>
        </div>
    )
}

export default Partner