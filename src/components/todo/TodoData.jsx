
const TodoData = (props) => {

    const { todoList } = props;


    console.log(">>> Check props: ", props)
    return (
        <div className="todo-data">
            {todoList.map((item, index) => {
                return (
                    <>
                        <div className="item-css">
                            <div>{item.name}</div>
                            <div>
                                <button>Delete</button>
                            </div>
                        </div>
                    </>
                )
            })}
            <div>
                {JSON.stringify(todoList)}
            </div>
        </div>
    );
}

export default TodoData;