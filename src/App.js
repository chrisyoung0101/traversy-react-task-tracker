import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

//State gets passed down where actions (calling a function like with deleteTask get passed up)

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

  // Delete Task
  //Think of it getting passed through props as onDelete
  //From App.js > to Tasks.js > to Task.js
  //Since we just want to delete the individual task item, we invoke the delete function from Task.js
  const deleteTask = (id) => {
    //For each task, filter where if the task id is NOT equal to the id being passed in (aka the id you clicked on)
    //We are using the filter array method to leave out the id we want to delete and
    //only show what we want to keep.
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
