
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { message, notification, Popconfirm, Table } from 'antd';
import UpdateUser from './user.update';
import { useState } from 'react';
import ViewUser from './user.view';
import { deleteUserApi } from '../../service/api.services';

const UserTable = (props) => {
    const [IsModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [dataTable, setDatatable] = useState(null);
    const { dataUser, loadUser } = props;
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

    return (
        <>
            < Table columns={columns} dataSource={dataUser} rowKey={"_id"} />
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