import { Button, Input, message, notification } from "antd"
import { useState } from "react"
import './user.form.css'
import { createUserApi } from "../../service/api.services.js";


const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const handleClick = async () => {
        const res = await createUserApi(fullName, email, password, phone)
        if (res.data) {
            notification.success({
                message: "create User",
                description: "Tạo user thành công"
            })
        }
        console.log(res)
    }
    return (
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
            <div>
                <Button type="primary"
                    onClick={handleClick}
                >Create User</Button>
            </div>
        </div>
    )
}
export default UserForm