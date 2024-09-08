import { useState } from "react";

const TodoNew = (props) => {

    const [valueInput, setValueIpout] = useState("");

    const { addNewTodo } = props;

    // addNewTodo("eric")

    const hanleClick = () => {
        addNewTodo(valueInput)
        setValueIpout("")
    }
    const hanleChange = (name) => {
        setValueIpout(name)
    }
    return (
        <div className="todolist">
            <label>Todo list</label>
            <div>
                <input type="text"
                    onChange={(event) => { hanleChange(event.target.value) }}
                    value={valueInput}
                />
                <button style={{ cursor: "pointer" }}
                    onClick={hanleClick}>Add</button>
            </div>
            <div>
                My test input is = {valueInput}
            </div>
        </div>
    );
}

export default TodoNew;