import React from 'react';
import '../App.css';
import { useSelector } from 'react-redux';

function Display() {
    return (
        <div className='display' id='display'>
            <h2>{useSelector((state) => state.drum.toDisplay)}</h2>
        </div>
    );
}

export default Display;
