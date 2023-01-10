function TaskItem({propriedade}) {
    return (
        <>
            <h1>{propriedade.tarefa}</h1>
            <h1>{propriedade.id}</h1>
        </>
    )
}

export default TaskItem