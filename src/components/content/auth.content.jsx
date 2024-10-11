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
    const [isLoading, setIsLoading] = useState(true)
    return (
        <AuthContent.Provider value={{ user, setUser, isLoading, setIsLoading }}>
            {props.children}
        </AuthContent.Provider>
    )
}