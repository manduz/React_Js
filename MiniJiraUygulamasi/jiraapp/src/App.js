import logo from './logo.svg';
import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';
import { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([])

  //onCreate ile göndermiş olduğumuz parametreler buraya geliyor
  const createTask = (title,textarea) =>{
    const createTasks = [
      ...tasks,{ //eskileri kopyalar yeniye ekler
        id:Math.round(Math.random()*999999),
        title,
        textarea
      }];
      setTasks(createTask);
  };

  const deleteTaskById = (id) =>
  {
    const afterDeletingTasks = tasks.filter((task) =>{
      return task.id !== id;
    })
    setTasks(afterDeletingTasks);
  };
  return (
    <div className="App">
      <TaskCreate onCreate = {createTask} />
      <h1>Görevler</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskById}/>
    </div>
  );
}

export default App;
