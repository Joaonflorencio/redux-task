import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, removeTask } from './redux/todosSlice';

function App() {
  const [input, setInput] = useState('');
  const tasks = useSelector(state => state.todos.tasks);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ id: tasks.length + 1, text: input }));
    setInput('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Añadir Tarea</button>
      </form>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => dispatch(removeTask(task.id))}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;