import { Button, Input, message, Modal, notification } from "antd"
import { useState } from "react"
import './user.form.css'
import { createUserApi } from "../../service/api.services.js";


const UserForm = (props) => {
    const { loadUser } = props;
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleSubmit = async () => {
        const res = await createUserApi(fullName, email, password, phone)
        if (res.data) {
            notification.success({
                message: "create User",
                description: "Tạo user thành công"
            })
            setIsModalOpen(false);
            await loadUser();
        }
        else {
            notification.error({
                message: "Error create User",
                description: JSON.stringify(res.message)
            })
        }
    }
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
                <h3>Users Table</h3>
                <Button type="primary"
                    onClick={() => setIsModalOpen(true)}
                >Create User</Button>
            </div>
            <Modal
                title="Create USER"
                open={isModalOpen}
                onOk={handleSubmit}
                maskClosable={false}
                onCancel={() => setIsModalOpen(false)}
                okText={"Create"}
            >
                <div className="form-user">
                    <div>
                        <label>FullName</label>
                        <Input
                            value={fullName}
                            onChange={(event) => { setFullName(event.target.value) }}
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <Input
                            value={email}
                            onChange={(event) => { setEmail(event.target.value) }}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <Input.Password
                            value={password}
                            onChange={(event) => { setPassword(event.target.value) }}
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
            </Modal>
        </>
    )
}
export default UserForm