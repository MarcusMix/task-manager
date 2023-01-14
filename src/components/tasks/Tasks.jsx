import { useState, useEffect } from "react"

// API
import api from "../../services/api";

// Style
import './Tasks.scss'

function Tasks () {

    const [tasks, setTasks] = useState([]);
    
      const fetchTasks = async () => {
        try {
          const {data} = await api.get('/tasks')
          setTasks(data)
        } catch (error) {
          console.log(error)
        }
      }
    
      useEffect(() => {
        fetchTasks()
      }, [])
    

    return (  

        <div className="tasks-container">
            <h3>Últimas tarefas</h3>

            <div className="last-tasks">
                <div className="tasks-list">
                    {tasks.filter(tarefas => tarefas.isCompleted === false).map(ultimaTarefa => <p>{ultimaTarefa.description}</p>)}
                </div>
            </div>

            <h3>Tarefas realizadas</h3>

            <div className="completed-tasks">
                {tasks.filter(tarefas => tarefas.isCompleted).map(tarefaConcluida => <p>{tarefaConcluida.description}</p>)}
            </div>

        </div>

    );
}

export default Tasks;

// {tasks.map(tarefas => <TaskItem propriedade={tarefas} key={tarefas.id}/>)}     