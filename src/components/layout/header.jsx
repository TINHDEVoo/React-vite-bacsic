import { Link, useNavigate } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { AppstoreOutlined, LoginOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, message } from 'antd';
import { AuthContent } from '../content/auth.content';
import { LogoutAPI } from '../../service/api.services';

const Header = () => {
    const { user, setUser } = useContext(AuthContent)
    const navigate = useNavigate();

    const handleLogout = async () => {
        const res = await LogoutAPI()
        if (res.data) {
            localStorage.removeItem("access_token")
            message.success("Logout thành công")
            setUser(
                {
                    "email": "",
                    "phone": "",
                    "fullName": "",
                    "role": "",
                    "avatar": "",
                    "id": ""
                }
            )
            navigate("/")
        }
    }

    const items = [
        {
            label: <Link to={"/"}>Home</Link>,
            key: 'home',
            icon: <MailOutlined />,
        },
        {
            label: <Link to={"/users"}>User</Link>,
            key: 'user',
            icon: <AppstoreOutlined />,
        },
        {
            label: <Link to={"/books"}>Book</Link>,
            key: 'book',
            icon: <AppstoreOutlined />,
        },
        ...(!user.fullName ? [{
            label: <Link to={"/login"}>Login</Link>,
            key: "login",
            icon: <LoginOutlined />
        }] : []),

        ...(user.fullName ? [{
            label: `Xin Chào ${user.fullName}`,
            key: "setting",
            icon: <SettingOutlined />,
            children: [

                {
                    label: <span onClick={() => handleLogout()}>Đăng Xuất</span>,
                    key: 'Logout'

                },
            ]
        }] : []),
    ];

    return (
        <Menu mode="horizontal" items={items} />
    )
}

export default Header;