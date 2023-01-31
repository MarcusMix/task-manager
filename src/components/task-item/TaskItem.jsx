import './TaskItem.js';

function TaskItem({ propriedade }) {
    return (
        <div className="task-item-container">
            <div className="task-description">
                <label className={propriedade.isCompleted ?
                    'checkbox-container-completed' :
                    'checkbox-container'}>

                    {propriedade.description}
                    <input type="checkbox"
                        defaultChecked={propriedade.isCompleted}
                    />
                    <span className={propriedade.isCompleted ?
                        'checkmark completed' :
                        'checkmark'}>
                    </span>
                </label>
            </div>
        </div>
    )
}

export default TaskItem