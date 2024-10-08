import React, { useState } from 'react';
import { Drawer } from 'antd';
import { useEffect } from 'react';

const ViewUser = (props) => {

    const { open, setOpen, dataTable, setDatatable } = props;
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [id, setId] = useState("");

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
    return (
        <Drawer title="Thông tin User" onClose={onClose} open={open}>
            {
                dataTable ?

                    <>
                        <div style={{ lineHeight: "40px" }}>
                            <p>Avatar:</p>
                            <div style={{ padding: "20px", lineHeight: "60px", textAlign: "center" }}>
                                <img width={150} height={150} src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataTable.avatar}`} />
                                <br />
                                <label style={{
                                    padding: "10px", background: "green",
                                    borderRadius: "10px", color: "#fff"
                                }} htmlFor="btnupload">Upload File</label>
                                <input type="file" id='btnupload' hidden />
                            </div>
                            <hr />
                            <p>ID: <a href="#">{id}</a></p>
                            <p>FullName: {fullName}</p>
                            <p>Email: {email}</p>
                            <p>Phone: {phone}</p>
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