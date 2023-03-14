import React from 'react'

const StreamItem = ({item}) => {
    const {title,date,time,icon,person,freame} = item;
    return (
        <div className="col-lg-3">
            <div className="stream__card__wrapper">
                <div className="stream__card__top" style={{ backgroundImage: `url(${freame})` }}>
                    <div className="stream__card__img">
                        <img src={person} alt="person" />
                    </div>
                </div>
                <div className="stream__card__body body__one">
                    <div className="card__body__left">
                        <h2 className='card__body__title'>{title}</h2>
                        <h2 className='card__body__date'>{date}</h2>
                    </div>
                    <div className="card__body__right">
                        <div className='stream__card__icon'>
                            <img src={icon} alt="icon" />
                        </div>
                        <h2 className='card__body__time'>{time} hrs</h2>
                    </div>
                </div>
                <div className="stream__card__footer ">
                    <button className='stream_btn'>Buy Stream Pass</button>
                </div>
            </div>
        </div>
    )
}

export default StreamItem