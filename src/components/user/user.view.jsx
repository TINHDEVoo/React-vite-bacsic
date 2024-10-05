import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
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
            <p>ID: {id}</p>
            <p>FullName: {fullName}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </Drawer>
    )
}
export default ViewUser;