
const TodoData = (props) => {

    const { todoList } = props;

    return (
        <div className="todo-data">
            {todoList.map((item, index) => {
                return (
                    <div className={`item-css`} key={item.id}>
                        <div>{item.name}</div>
                        <div>
                            <button>Delete</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default TodoData;