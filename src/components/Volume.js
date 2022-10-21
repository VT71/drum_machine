import React from 'react';
import '../App.css';

function Volume() {
    const volumeAnimation = (sliderId) => {
        document.getElementById(sliderId).style.backgroundSize = `${
            document.getElementById('volume-slider').value
        }% 100%`;
    };

    return (
        <div className='volume-container'>
            <input
                id='volume-slider'
                type='range'
                className='volume-slider'
                min='0'
                max='100'
                onChange={() => {
                    volumeAnimation('volume-slider');
                }}
            />
        </div>
    );
}

export default Volume;
