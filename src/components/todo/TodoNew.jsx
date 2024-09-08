
const TodoNew = (props) => {
    const { addNewTodo } = props;

    // addNewTodo("eric")

    const hanleClick = () => {
        alert("Click me")
    }
    const hanleChange = (name) => {
        console.log(">> check hanleOnchange ", name)
    }
    return (
        <div className="todolist">
            <label>Todo list</label>
            <div>
                <input type="text"
                    onChange={(event) => { hanleChange(event.target.value) }} />
                <button style={{ cursor: "pointer" }}
                    onClick={hanleClick}>Add</button>
            </div>
        </div>
    );
}

export default TodoNew;