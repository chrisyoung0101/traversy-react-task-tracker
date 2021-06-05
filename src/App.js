import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

//State gets passed down where actions (calling a function like with deleteTask get passed up)

// Main root app component
function App() {
  //state to hide / show the input forms with the green add button.  We will toggle state using a boolean value
  const [showAddTask, setShowAddTask] = useState(false);

  //Default task state
  const [tasks, setTasks] = useState([]);

  // Add the new Task to Global State
  const addTask = (task) => {
    //add an id (random number) since we are not dealing with a backend that adds an id on it's own
    const id = Math.floor(Math.random() * 10000) + 1;
    //Confusion alert : take the task being the task we are creating aka the new task we submitted through the form and adding the id to that new task.
    const newTask = { id, ...task };
    //set state with the new task
    setTasks([...tasks, newTask]);

    console.log(id);
  };

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

  //toggle reminder
  //if task.id on the current iteration is equal to the id that is passed in then we have/show object else we just show the task.  This object is where we want to spread in all the task's properties (I guess this is making them available?) & then change the current value of task.reminder to the opposite of it's value being from true to false or false to true. View this in React devtools to watch the value switch.
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      {/* invoking onAdd will set the value of showAddTask to the opposite of whatever the current value is - toggling the form */}
      {/* second use of showAddTask :  */}
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {/* if showAddTask is true then show the Add task component green button*/}
      {/* this expression is like a ternary without using an else */}
      {showAddTask && <AddTask onAdd={addTask} />}

      {/* if tasks exist, show them otherwise show message */}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No tasks to show'
      )}
    </div>
  );
}

export default App;
