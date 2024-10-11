import { Link } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { AppstoreOutlined, LoginOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { AuthContent, AuthWapper } from '../content/auth.content';

const Header = () => {
    const [current, setCurrent] = useState('mail');
    const { user } = useContext(AuthContent)
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

                { label: 'Đăng Xuất', key: 'Logout' },
            ]
        }] : []),
    ];

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    )
}

export default Header;