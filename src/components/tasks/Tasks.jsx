import { useState, useEffect } from "react"

// API
import api from "../../services/api";

// Style
import { CompletedTasks, LastTasks, TaskFont, TaskList, TasksContainer } from './Tasks.styles'

function Tasks() {

  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const { data } = await api.get('/tasks')
      setTasks(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])


  return (

    <TasksContainer>
      <TaskFont>Últimas Tarefas</TaskFont>

      <LastTasks>
          <TaskList>
            {tasks.filter(tarefas => tarefas.isCompleted === false).map(ultimaTarefa => <p>{ultimaTarefa.description}</p>)}
          </TaskList>
      </LastTasks>
     

      <TaskFont>Tarefas Realizadas</TaskFont>

      <CompletedTasks>
        {tasks.filter(tarefas => tarefas.isCompleted).map(tarefaConcluida => <p>{tarefaConcluida.description}</p>)}
      </CompletedTasks>
    </TasksContainer>
  );
}

export default Tasks;

// {tasks.map(tarefas => <TaskItem propriedade={tarefas} key={tarefas.id}/>)}     