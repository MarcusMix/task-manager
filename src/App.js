import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import TaskItem from './components/TaskItem';

function App() {
 
  const [tasks, setTasks] = useState([
    {
      id: '1',
      tarefa: 'Fazer Anki',
      feita: false,
    },
    {
      id: '1',
      tarefa: 'Estudar Programação',
      feita: false
    }
  ])

  const fetchTasks = async () => {
    try {
      const {data} = await axios.get("https://fsc-taskmanager-api.up.railway.app/tasks")
      setTasks(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

 

  return (
    <>
      {tasks.map(tarefas => <TaskItem propriedade={tarefas} key={tarefas.id}/>)}     
    </>
  )
}

export default App;
