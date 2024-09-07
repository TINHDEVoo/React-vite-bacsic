
const TodoNew = (props) => {
    const { addNewTodo } = props;

    // addNewTodo("eric")
    return (
        <div className="todolist">
            <label>Todo list</label>
            <div>
                <input type="text" />
                <button>Add</button>
            </div>
        </div>
    );
}

export default TodoNew;