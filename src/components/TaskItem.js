const  TaskItem = ({propriedade}) => {
    return (
        <>
        <h1>{`Tarefa: ${propriedade.descricao} feita? ${propriedade.feita ? "sim" : "não"}`}</h1>
        </>
    )
}

export default TaskItem