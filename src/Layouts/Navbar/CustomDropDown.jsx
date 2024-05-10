import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom';

const items = [
    {
        key: '1',
        label: (
            <Link to="/add-new-service">Add Service</Link>
        ),
    },
    {
        key: '2',
        label: (
            <Link to="/manage-service">Manage Service</Link>
        ),
    },
    {
        key: '3',
        label: (
            <Link to="/booked-service">Booked Service</Link>
        ),
    },
    {
        key: '4',
        label: (
            <Link to="/service-to-do">Service To Do</Link>
        ),
    },
];

const CustomDropDown = () => (
    <Dropdown
        menu={{
            items,
        }}
    >
        <a onClick={(e) => e.preventDefault()}>
            <Space>
                Dashboard
                <DownOutlined />
            </Space>
        </a>
    </Dropdown>
);
export default CustomDropDown;