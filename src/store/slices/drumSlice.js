import { createSlice } from '@reduxjs/toolkit';

const initialState = { bank: false, power: true, volume: 0.5, toDisplay: '' };

const drumSlice = createSlice({
    name: 'drum',
    initialState,
    reducers: {
        setPower(state) {
            state.power = !state.power;
        },
        setBank(state) {
            state.bank = !state.bank;
        },
        setVolume(state, action) {
            state.volume = action.payload;
        },
        setDisplay(state, action) {
            state.toDisplay = action.payload;
        },
    },
});

export const { setPower, setBank, setVolume, setDisplay } = drumSlice.actions;

export default drumSlice.reducer;
