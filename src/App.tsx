import React from 'react';
import Calendar from './component/calendar/index'
import './App.css';
import dayjs from 'dayjs';

function App() {
  return (
    <div className="App">
      <Calendar value={dayjs('2025-02-27')}></Calendar>
    </div>
  );
}

export default App;
