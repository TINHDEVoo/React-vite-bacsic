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
export {
    createUserApi, updateUserApi, fetchAllUserAPI, deleteUserApi,
    handleUploadAvatar, updateUserAvatar
}