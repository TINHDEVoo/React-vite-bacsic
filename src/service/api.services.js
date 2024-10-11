import { Avatar } from "antd";
import axios from "./axios.custom"

const fetchAllUserAPI = (current, pageSize) => {
    const url_http = `/api/v1/user?current=${current}&pageSize=${pageSize}`;
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

const handleUploadAvatar = (file, folder) => {
    const url_http = "/api/v1/file/upload";
    const config = {
        headers: {
            "upload-type": folder,
            "Content-Type": 'multipart/form-data'
        }
    }
    var bodyFormData = new FormData();
    bodyFormData.append('fileImg', file);
    return axios.post(url_http, bodyFormData, config)
}
const updateUserAvatar = (Avatar, _id, fullName, phone) => {
    const url_http = "/api/v1/user";
    const data = {
        avatar: Avatar,
        _id: _id,
        fullName: fullName,
        phone: phone,
    }
    return axios.put(url_http, data)
}


const RegisterUserApi = (fullName, email, password, phone) => {
    const url_http = "/api/v1/user/register";
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    }
    return axios.post(url_http, data)
}

const LoginUserApi = (fullName, password) => {
    const url_http = "/api/v1/auth/login";
    const data = {
        username: fullName,
        password: password,
        delay: 5000
    }
    return axios.post(url_http, data)
}

const getAccoutAPI = () => {
    const url_http = "/api/v1/auth/account";
    return axios.get(url_http)
}

const LogoutAPI = () => {
    const url_http = "/api/v1/auth/logout";
    return axios.post(url_http)
}

const FetchAllBook = (current, pageSize) => {
    const URL_HTTP = `/api/v1/book?current=${current}&pageSize=${pageSize}`;
    return axios.get(URL_HTTP)
}

export {
    createUserApi, updateUserApi, fetchAllUserAPI, deleteUserApi,
    handleUploadAvatar, updateUserAvatar, RegisterUserApi, LoginUserApi,
    getAccoutAPI, LogoutAPI, FetchAllBook
}