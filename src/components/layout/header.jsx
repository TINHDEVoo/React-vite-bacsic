import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

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
];
const Header = () => {
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    )
}

export default Header;