
import { Space, Table, Tag } from 'antd';
import { fetchAllUserAPI } from '../../service/api.services';
import { useEffect, useState } from 'react';

const UserTable = () => {

    const [dataUser, setDataUser] = useState([])

    useEffect(() => {
        console.log("Ruun use 111")
        loadUser();
    }, []);

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
    ];

    const loadUser = async () => {
        const res = await fetchAllUserAPI();
        setDataUser(res.data.data)
    }
    console.log("Ruun 1000")
    return (
        < Table columns={columns} dataSource={dataUser} rowKey={"_id"} />
    )
}

export default UserTable;