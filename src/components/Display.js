import React from 'react';
import '../App.css';
import { useSelector } from 'react-redux';

function Display() {
    return (
        <div className='display'>
            <h2>{useSelector((state) => state.drum.display)}</h2>
        </div>
    );
}

export default Display;
