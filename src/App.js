import './App.css';
import Pad from './components/Pad';
import Switch from './components/Switch';
import Volume from './components/Volume';
import Display from './components/Display';

function App() {
    return (
        <div className='root'>
            <h1 className='main-title'>Drum Machine</h1>
            <div className='drum-machine'>
                <div className='drum-pads'>
                    <Pad letter='Q' />
                    <Pad letter='W' />
                    <Pad letter='E' />
                    <Pad letter='A' />
                    <Pad letter='S' />
                    <Pad letter='D' />
                    <Pad letter='Z' />
                    <Pad letter='X' />
                    <Pad letter='C' />
                </div>

                <div className='control-panel'>
                    <div className='switches'>
                        <Switch
                            switchId='switch1'
                            toggleId='toggle1'
                            label='BANK'
                        />
                        <Switch
                            switchId='switch2'
                            toggleId='toggle2'
                            label='POWER'
                        />
                    </div>

                    <Volume />

                    <Display />
                </div>
            </div>
        </div>
    );
}

export default App;
