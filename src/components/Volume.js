import React from 'react';
import '../App.css';
import { useDispatch } from 'react-redux';
import { setVolume } from '../store/slices/drumSlice';

function Volume() {
    const dispatch = useDispatch();

    const volumeUpdate = () => {
        dispatch(
            setVolume(
                parseInt(document.getElementById('volume-slider').value) / 100
            )
        );
        document.getElementById('volume-slider').style.backgroundSize = `${
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
                    volumeUpdate();
                }}
            />
        </div>
    );
}

export default Volume;
