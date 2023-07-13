import React from 'react';

export default function Main(props) {
    const { availableTimes, handleTimeChange } = props;


    return (
        <div className="form-group">
            <label className='input-fonts' htmlFor="res-time">Choose time</label>
            <select className='res-time' id="res-time" onChange={handleTimeChange}>
                {availableTimes.map((time) => (
                    <option key={time}>{time}</option>
                ))}
            </select>
        </div>
    );
}