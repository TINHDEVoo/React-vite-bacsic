import { createContext, useState } from "react";

export const AuthContent = createContext({
    "email": "",
    "phone": "",
    "fullName": "",
    "role": "",
    "avatar": "",
    "id": ""
})

export const AuthWapper = (props) => {
    const [user, setUser] = useState({
        "email": "",
        "phone": "",
        "fullName": "",
        "role": "",
        "avatar": "",
        "id": ""
    })
    return (
        <AuthContent.Provider value={{ user, setUser }}>
            {props.children}
        </AuthContent.Provider>
    )
}