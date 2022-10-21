import React from 'react';
import '../App.css';

function Switch({ switchId, toggleId, label }) {
    const switchAnimation = (switchId, toggleId) => {
        const switchElement = document.getElementById(switchId);
        const toggleElement = document.getElementById(toggleId);

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
                    switchAnimation(switchId, toggleId);
                }}
            >
                <div id={toggleId} className='toggle'></div>
            </div>
        </div>
    );
}

export default Switch;
