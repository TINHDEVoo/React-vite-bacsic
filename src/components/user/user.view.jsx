import React, { useState } from 'react';
import { Button, Drawer, notification } from 'antd';
import { useEffect } from 'react';
import { handleUploadAvatar, updateUserAvatar } from '../../service/api.services';

const ViewUser = (props) => {

    const { open, setOpen, dataTable, setDatatable, loadUser } = props;
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [id, setId] = useState("");
    const [selectedFile, setSelectedFile] = useState(null)
    const [preview, setPreview] = useState(null)

    useEffect(() => {
        if (dataTable) {
            setId(dataTable._id)
            setFullName(dataTable.fullName)
            setPhone(dataTable.phone)
            setEmail(dataTable.email)
        }
    }, [dataTable])

    const onClose = () => {
        setOpen(false)
        setDatatable(false)
    }

    const handleOnchangeUpload = (event) => {
        if (!event.target.files || event.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        else {
            const file = event.target.files[0];
            if (file) {
                setSelectedFile(file)
                setPreview(URL.createObjectURL(file))
            }
        }
    }
    const handleSaveAvatar = async () => {
        const resUpload = await handleUploadAvatar(selectedFile, "avatar");
        if (resUpload.message) {
            notification.error({
                message: "Update Avatar",
                description: JSON.stringify(resUpload.message)
            })
        }
        else {
            const newAvatarUpload = resUpload.data.data.fileUploaded;
            const resAvatarUpdate = await updateUserAvatar(newAvatarUpload, id, fullName, phone)
            if (resAvatarUpdate.data.data) {
                notification.success({
                    message: "Update Avatar",
                    description: "Update Avatar Thành Công!"
                })
                setOpen(false)
                setPreview(null)
                await loadUser();
            }
            else {
                notification.error({
                    message: "Update Avatar",
                    description: JSON.stringify(resAvatarUpdate.message)
                })
            }
        }

    }
    return (
        <Drawer title="Thông tin User" onClose={onClose} open={open}>
            {
                dataTable ?

                    <>
                        <div>
                            <div style={{ lineHeight: "40px" }}>
                                <p>ID: <a href="#">{id}</a></p>
                                <p>FullName: {fullName}</p>
                                <p>Email: {email}</p>
                                <p>Phone: {phone}</p>
                            </div>
                            <p>Avatar:</p>
                            <hr />
                            <div style={{ lineHeight: "50px", padding: "20px", textAlign: "center" }}>
                                <img width={"80%"} src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataTable.avatar}`} />
                                <br />
                                <label style={{
                                    cursor: "pointer",
                                    padding: "10px", background: "green",
                                    borderRadius: "10px", color: "#fff"
                                }} htmlFor="btnupload">Upload File</label>
                                <input type="file" id='btnupload' hidden
                                    onChange={(event) => handleOnchangeUpload(event)} />
                                {
                                    preview &&
                                    <>
                                        <div style={{ padding: "20px", textAlign: "center" }}>
                                            <img width={"80%"} src={preview} />
                                        </div>
                                        <Button type='primary' onClick={() => { handleSaveAvatar() }}>Save</Button>
                                    </>
                                }
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div>
                            Không có dữ liệu
                        </div>
                    </>
            }
        </Drawer>
    )
}
export default ViewUser;