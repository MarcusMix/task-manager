import { useState } from 'react';
import './App.css';
import TaskItem from './components/TaskItem';

function App() {
 
  const [tarefas, setTarefas] = useState([
    {
      id: '1',
      descricao: "Estudar programação",
      feita: false
    },
    {
      id: '2',
      descricao: "Estudar Inglês",
      feita: true
    },
]);

  return (
    <>
      {tarefas.map(tarefa => <TaskItem propriedade={tarefa} key={tarefa.id}/>)}
    </>
  )
}

export default App;
