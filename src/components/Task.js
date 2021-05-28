import { FaTimes } from 'react-icons/fa';

//npm i react-icons
//will show installed in package.json

const Task = ({ task, onDelete }) => {
  return (
    <div className="task">
      <h3>
        {task.text}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          //call the onDelete function and pass in the id of the task we want to
          //delete
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
