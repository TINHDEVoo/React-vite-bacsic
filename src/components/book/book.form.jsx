import { Button } from "antd";

const BookForm = () => {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "30px" }}>
                <div>
                    <h2> Book Table</h2>
                </div>
                <Button type="primary">Create Books</Button>
            </div>
        </>
    )
}
export default BookForm;