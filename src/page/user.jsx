import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { fetchAllUserAPI } from '../service/api.services';
import { useEffect, useState } from 'react';

const UserPage = () => {
    const [dataUser, setDataUser] = useState([])
    const [current, setCurrent] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        loadUser();
    }, [current, pageSize]);

    const loadUser = async () => {
        const res = await fetchAllUserAPI(current, pageSize);
        if (res.data.data) {
            setDataUser(res.data.data.result)
            setCurrent(res.data.data.meta.current)
            setPageSize(res.data.data.meta.pageSize)
            setTotal(res.data.data.meta.total)
        }
    }
    return (
        <div>
            <UserForm loadUser={loadUser} />
            <UserTable dataUser={dataUser}
                loadUser={loadUser}
                current={current}
                pageSize={pageSize}
                total={total}
                setCurrent={setCurrent}
                setPageSize={setPageSize}
                setTotal={setTotal}
            />
        </div>
    )
}

export default UserPage;