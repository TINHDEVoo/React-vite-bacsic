import { Button, Input } from "antd"
import { useState } from "react"
import './user.form.css'

const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const handleClick = () => {
        console.log(">>>Check form: ", { fullName, email, password, phone })
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