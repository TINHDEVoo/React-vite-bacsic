import { useEffect, useState } from "react";
import { FetchAllBook } from "../service/api.services";
import BookTable from "../components/book/book.table";
import BookForm from "../components/book/book.form";

const BookPage = () => {
    const [dataBook, setDataBook] = useState([]);
    const [current, setCurrent] = useState(1)
    const [pageSize, setPageSize] = useState(5)
    const [total, setToTal] = useState(5)
    useEffect(() => {
        loadBook();
    }, [current, pageSize])
    const loadBook = async () => {
        const res = await FetchAllBook(current, pageSize);
        if (res.data) {
            setDataBook(res.data.data.result)
            setCurrent(res.data.data.meta.current)
            setPageSize(res.data.data.meta.pageSize)
            setToTal(res.data.data.meta.total)
        }
    }
    return (
        <>
            <BookForm />
            <BookTable
                dataBook={dataBook}
                current={current}
                setCurrent={setCurrent}
                pageSize={pageSize}
                setPageSize={setPageSize}
                total={total}
            />
        </>
    )
}

export default BookPage;