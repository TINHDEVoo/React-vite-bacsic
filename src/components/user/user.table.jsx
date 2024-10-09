
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { message, notification, Popconfirm, Table } from 'antd';
import UpdateUser from './user.update';
import { useState } from 'react';
import ViewUser from './user.view';
import { deleteUserApi } from '../../service/api.services';

const UserTable = (props) => {
    const [IsModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [dataTable, setDatatable] = useState(null);
    const { dataUser, loadUser, current, pageSize, total, setCurrent, setPageSize, setTotal } = props;
    const [open, setOpen] = useState(false);
    const [id, setId] = useState(null);

    const confirm = async () => {
        const res = await deleteUserApi(id)
        if (res.data) {
            notification.success({
                message: "Xóa",
                description: "Xóa user thành công"
            })
            setId(null);
            await loadUser();
        }
        else {
            notification.error({
                message: "Xóa",
                description: JSON.stringify(res.message)
            })
        }
    }

    const cancel = (e) => {
        console.log(e);
        message.error('Click on No');
    }

    const columns = [
        {
            title: 'STT',
            render: (_, record, index) => {
                return (
                    <>
                        {(index + 1) + (current - 1) * pageSize}
                    </>
                )
            }
        },
        {
            title: 'Id',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <a href='#'
                        onClick={() => {
                            setOpen(true)
                            setDatatable(record)
                        }
                        }
                    > {record._id}</a >
                )
            }
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <>
                    <EditOutlined
                        style={{ color: "blue", cursor: "pointer" }}
                        onClick={() => {
                            setIsModalUpdateOpen(true)
                            setDatatable(record)
                        }}
                    />
                    <Popconfirm
                        title="Xóa"
                        description="Bạn có muốn xóa user này không?"
                        onConfirm={confirm}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                    >
                        <DeleteOutlined onClick={() => { setId(record._id) }} style={{ color: "red", cursor: "pointer", margin: "30px" }} />
                    </Popconfirm>
                </>
            ),
        },
    ];


    const onchang = (pagination, filters, sorter, extra) => {
        if (+pagination.pageSize !== +pageSize) {
            setPageSize(+pagination.pageSize)
        }

        if (+pagination.current !== +current) {
            setCurrent(+pagination.current)
        }
    }

    return (
        <>
            < Table style={{ padding: "20px" }} columns={columns} dataSource={dataUser} rowKey={"_id"}
                pagination={
                    {
                        current: current,
                        pageSize: pageSize,
                        showSizeChanger: true,
                        total: total,
                        showTotal: (total, range) => { return (<div> {range[0]}-{range[1]} trên {total} rows</div>) }
                    }}
                onChange={onchang}
            />
            <UpdateUser
                IsModalUpdateOpen={IsModalUpdateOpen}
                setIsModalUpdateOpen={setIsModalUpdateOpen}
                dataTable={dataTable}
                setDatatable={setDatatable}
                loadUser={loadUser}
            />
            <ViewUser
                open={open}
                setOpen={setOpen}
                dataTable={dataTable}
                setDatatable={setDatatable}
                loadUser={loadUser}
            />
        </>
    )
}

export default UserTable;