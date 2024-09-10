
const TodoData = (props) => {

    const { todoList, deleteTodo } = props;

    const handleClick = (key) => {
        deleteTodo(key)
    }
    return (
        <div className="todo-data">
            {todoList.map((item, index) => {
                return (
                    <div className={`item-css`} key={item.id}>
                        <div>{item.name}</div>
                        <div>
                            <button onClick={() => { handleClick(item.id) }}>Delete</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default TodoData;