import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Pagination, Table } from "antd";

const BookTable = (props) => {

    const { dataBook, current, setCurrent, pageSize, setPageSize, total } = props;

    const columns = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
            render: (_, record, index) => {
                return (
                    index + 1
                )
            },
        },
        {
            title: 'Id',
            dataIndex: '_id',
            key: '_id',
            render: (record) => {
                return (
                    <a>{record}</a>
                )
            }
        },
        {
            title: 'Tiêu đề',
            dataIndex: 'mainText',
            key: 'mainText',
        },
        {
            title: 'Giá tiền',
            key: 'price',
            dataIndex: 'price',
        },
        {
            title: 'Số lượng',
            key: 'sold',
            dataIndex: 'sold',
        },
        {
            title: 'Tác giả',
            key: 'author',
            dataIndex: 'author',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => {
                return (
                    <div style={{ width: "100px" }}>
                        <EditOutlined style={{
                            color: "blue",
                            cursor: "pointer"
                        }} />
                        <DeleteOutlined style={{
                            color: "red",
                            margin: "0 10px",
                            cursor: "pointer"
                        }} />
                    </div>
                )
            }
        },
    ];

    const onchange = (pagination) => {
        if (+pagination.current !== +current) {
            setCurrent(+pagination.current)
        }

        if (+pagination.pageSize !== +pageSize) {
            setPageSize(+pagination.pageSize)
        }
    }
    return (
        <>
            <Table style={{ padding: "10px" }}
                dataSource={dataBook}
                columns={columns} rowKey={"_id"}
                pagination={
                    {
                        current: current,
                        pageSize: pageSize,
                        showSizeChanger: true,
                        total: total,
                        showTotal: (total, range) => { return (<div> {range[0]}-{range[1]} trên {total} rows</div>) }
                    }}
                onChange={onchange}
            />
        </>
    )
}

export default BookTable;