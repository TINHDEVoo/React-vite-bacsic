
const TodoData = (props) => {

    const { name, age, address, todoList } = props;


    console.log(">>> Check props: ", props)
    return (
        <div className="todo-data">
            <div>learning react</div>
            <div>learning youtube</div>
            <div>{name}</div>
            <div>{age}</div>
            <div>{JSON.stringify(address)}</div>
            <div>
                {JSON.stringify(todoList)}
            </div>
        </div>
    );
}

export default TodoData;