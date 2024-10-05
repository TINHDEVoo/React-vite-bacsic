import axios from "./axios.custom"

const fetchAllUserAPI = () => {
    const url_http = "/api/v1/user";
    return axios.get(url_http)
}

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
const updateUserApi = (_id, fullName, phone) => {
    const url_http = "/api/v1/user";
    const data = {
        _id: _id,
        fullName: fullName,
        phone: phone
    }
    return axios.put(url_http, data)
}

const deleteUserApi = (_id) => {
    const url_http = `/api/v1/user/${_id}`;
    return axios.delete(url_http)
}

export {
    createUserApi, updateUserApi, fetchAllUserAPI, deleteUserApi
}