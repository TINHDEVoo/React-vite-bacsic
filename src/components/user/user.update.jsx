import { Button, Input, message, Modal, notification } from "antd"
import { useEffect, useState } from "react"
import './user.form.css'
import { updateUserApi } from "../../service/api.services.js";

const UpdateUser = (props) => {
    const { loadUser, setIsModalUpdateOpen, IsModalUpdateOpen, dataTable, setDatatable } = props;
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [id, setId] = useState("");

    useEffect(() => {
        if (dataTable) {
            setId(dataTable._id)
            setFullName(dataTable.fullName)
            setPhone(dataTable.phone)
        }
    }, [dataTable])



    const handleSubmit = async () => {
        const res = await updateUserApi(id, fullName, phone)
        if (res.data) {
            notification.success({
                message: "update User",
                description: "update user thành công"
            })
            setIsModalUpdateOpen(false);
            setDatatable(null)
            await loadUser();
        }
        else {
            notification.error({
                message: "update User",
                description: JSON.stringify(res.message)
            })
        }
    }

    return (
        <Modal
            title="Update USER"
            open={IsModalUpdateOpen}
            onOk={handleSubmit}
            maskClosable={false}
            onCancel={() => {
                setIsModalUpdateOpen(false)
                setDatatable(null)
            }}
            okText={"Update"}
        >
            <div className="form-user">
                <div>
                    <label>ID</label>
                    <Input
                        value={id}
                        onChange={(event) => { setFullName(event.target.value) }}
                        disabled
                    />
                </div>
                <div>
                    <label>FullName</label>
                    <Input
                        value={fullName}
                        onChange={(event) => { setFullName(event.target.value) }}
                    />
                </div>
                <div>
                    <label>Phone</label>
                    <Input
                        value={phone}
                        onChange={(event) => { setPhone(event.target.value) }}
                    />
                </div>
            </div>
        </Modal >
    )
}
export default UpdateUser;