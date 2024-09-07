
const TodoData = (props) => {

    const { name, age, address } = props;


    console.log(">>> Check props: ", props)
    return (
        <div className="todo-data">
            <div>learning react</div>
            <div>learning youtube</div>
            <div>{name}</div>
            <div>{age}</div>
            <div>{address.name}</div>
        </div>
    );
}

export default TodoData;