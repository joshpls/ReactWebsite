import React from 'react';
import './App.css';
import HomePage from './Home';
import Fab from '@mui/material/Fab';
import Resume from './Resume';
import BottomNav from './BottomNav';
import Slider from '@mui/material/Slider';

function App() {
  const [value, setValue] = React.useState<number>(30);

  const a = [123, 23, 430, 20, 502]
  const b = a.map((num) => <li>{num}</li>)

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
    console.log(newValue);
  };

  return (
    <div className="App">
      <header className="App-header">
        <HomePage></HomePage>
        <div>
          <div>
          <Fab
            size="small"
            color="secondary"
            aria-label="add"> 
            + 
          </Fab>
          </div>
          <div>
          <Slider aria-label="Volume"
            value={value}
            step={1}
            marks
            min={1}
            max={5}
            onChange={handleChange}
          />
          </div>

        </div>
      </header>
      <BottomNav></BottomNav>
    </div>
  );
}

export default App;
