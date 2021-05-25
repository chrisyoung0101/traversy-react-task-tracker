import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

// Main root app component
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Dog Walk',
      day: 'Feb 5th at 2pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Pizza',
      day: 'Jan 5th at 12pm',
      reminder: false,
    },
    {
      id: 3,
      text: 'Tape Gun',
      day: 'Oct 10th at 6pm',
      reminder: true,
    },
    {
      id: 4,
      text: 'Book Return',
      day: 'June 16th at 4pm',
      reminder: false,
    },
    {
      id: 5,
      text: 'Rainbow',
      day: 'Aug 11th at 10am',
      reminder: true,
    },
    {
      id: 6,
      text: 'Tennis',
      day: 'Mar 7th at 2pm',
      reminder: true,
    },
  ]);

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
