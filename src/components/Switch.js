import React from 'react';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { setPower, setBank, setDisplay } from '../store/slices/drumSlice';

function Switch({ switchId, toggleId, label }) {
    const dispatch = useDispatch();

    const bank = useSelector((state) => state.drum.bank);
    const power = useSelector((state) => state.drum.power);

    const switchUpdate = (switchId) => {
        switch (switchId) {
            case 'switch1':
                if (power) {
                    if (bank) {
                        dispatch(setDisplay('Heater Kit'));
                    } else {
                        dispatch(setDisplay('Smooth Piano Kit'));
                    }
                    dispatch(setBank(!bank));
                }
                break;
            case 'switch2':
                let pads = document.querySelectorAll('div.drum-pad');
                if (power) {
                    document.getElementById('volume-slider').disabled = true;
                    pads.forEach((pad) => {
                        pad.className += ' disabled';
                    });
                    dispatch(setDisplay(''));
                } else {
                    document.getElementById('volume-slider').disabled = false;
                    pads.forEach((pad) => {
                        pad.className = 'drum-pad';
                    });
                }
                dispatch(setPower(!power));
                break;
            default:
                dispatch(setPower(false));
        }
    };

    const switchAnimation = (switchId, toggleId) => {
        const switchElement = document.getElementById(switchId);
        const toggleElement = document.getElementById(toggleId);

        switchUpdate(switchId);

        switch (switchElement.style.backgroundColor) {
            case 'rgb(242, 242, 242)':
                switchElement.style.backgroundColor = 'rgb(38, 38, 38)';
                break;
            case 'rgb(38, 38, 38)':
                switchElement.style.backgroundColor = 'rgb(242, 242, 242)';
                break;
            default:
                if (switchId === 'switch1') {
                    switchElement.style.backgroundColor = 'rgb(242, 242, 242)';
                } else {
                    switchElement.style.backgroundColor = 'rgb(38, 38, 38)';
                }
                break;
        }

        switch (toggleElement.style.left) {
            case '2.9em':
                toggleElement.style.backgroundColor = 'rgb(242, 242, 242)';
                toggleElement.style.left = '0.2em';
                break;
            case '0.2em':
                toggleElement.style.backgroundColor = 'rgb(38, 38, 38)';
                toggleElement.style.left = '2.9em';
                break;
            default:
                if (toggleId === 'toggle1') {
                    toggleElement.style.backgroundColor = 'rgb(38, 38, 38)';
                    toggleElement.style.left = '2.9em';
                } else {
                    toggleElement.style.backgroundColor = 'rgb(242, 242, 242)';
                    toggleElement.style.left = '0.2em';
                }
                break;
        }
    };

    return (
        <div className='switch-container'>
            <h2>{label}</h2>
            <div
                className='switch'
                id={switchId}
                onClick={() => {
                    if (switchId === 'switch2' || power) {
                        switchAnimation(switchId, toggleId);
                    }
                }}
            >
                <div id={toggleId} className='toggle'></div>
            </div>
        </div>
    );
}

export default Switch;
