import '../App.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDisplay } from '../store/slices/drumSlice';

function Pad({ letter }) {
    const bank = useSelector((state) => state.drum.bank);
    const bankOff = new Map([
        ['Q', 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'],
        ['W', 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'],
        ['E', 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'],
        ['A', 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'],
        ['S', 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'],
        ['D', 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'],
        ['Z', 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'],
        ['X', 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'],
        ['C', 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'],
    ]);
    const bankOn = new Map([
        ['Q', 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'],
        ['W', 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'],
        ['E', 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'],
        [
            'A',
            'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
        ],
        ['S', 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'],
        ['D', 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'],
        ['Z', 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'],
        ['X', 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'],
        ['C', 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'],
    ]);

    const bankOffNames = new Map([
        ['Q', 'Heater 1'],
        ['W', 'Heater 2'],
        ['E', 'Heater 3'],
        ['A', 'Heater 4'],
        ['S', 'Clap'],
        ['D', 'Open HH'],
        ['Z', "Kick n' Hat"],
        ['X', 'Kick'],
        ['C', 'Closed HH'],
    ]);

    const bankOnNames = new Map([
        ['Q', 'Chord 1'],
        ['W', 'Chord 2'],
        ['E', 'Chord 3'],
        ['A', 'Shaker'],
        ['S', 'Open HH'],
        ['D', 'Closed HH'],
        ['Z', 'Punchy Kick'],
        ['X', 'Side Stick'],
        ['C', 'Snare'],
    ]);

    const playAudio = (letter) => {
        let path = '';
        if (!bank) {
            path = bankOff.get(letter);
        } else {
            path = bankOn.get(letter);
        }

        const audio = new Audio(path);
        audio.play();
    };

    const handleKey = (event) => {
        switch (event.key) {
            case 'Q':
            case 'q':
                document.getElementById(`pad-Q`).click();
                break;
            case 'W':
            case 'w':
                document.getElementById(`pad-W`).click();
                break;
            case 'E':
            case 'e':
                document.getElementById(`pad-E`).click();
                break;
            case 'A':
            case 'a':
                document.getElementById(`pad-A`).click();
                break;
            case 'S':
            case 's':
                document.getElementById(`pad-S`).click();
                break;
            case 'D':
            case 'd':
                document.getElementById(`pad-D`).click();
                break;
            case 'Z':
            case 'z':
                document.getElementById(`pad-Z`).click();
                break;
            case 'X':
            case 'x':
                document.getElementById(`pad-X`).click();
                break;
            case 'C':
            case 'c':
                document.getElementById(`pad-C`).click();
                break;
            default:
                console.log('KEY PRESS NOT RECOGNISED');
        }
    };
    document.body.onkeydown = (event) => {
        handleKey(event);
    };

    return (
        <button
            className='drum-pad'
            id={`pad-${letter}`}
            onClick={() => playAudio(letter)}
        >
            {letter}
        </button>
    );
}

export default Pad;
