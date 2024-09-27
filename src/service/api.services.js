import axios from "./axios.custom"

const createUserApi = (fullName, email, password, phone) => {
    const url_http = "/api/v1/user";
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    }
    return axios.post(url_http, data)
}
const updateUserApi = () => {

}

const fetchAllUserAPI = () => {
    const url_http = "/api/v1/user";
    return axios.get(url_http)
}
export {
    createUserApi, updateUserApi, fetchAllUserAPI
}