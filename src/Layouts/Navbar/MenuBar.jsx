import React from 'react';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom';
0
const items = [
  {
    key: '1',
    label: (
        <Link to="/">Home</Link>
    )
  },
  {
    key: '2',
    label: (
        <Link to="/service/all">Services</Link>
    )
  },
  {
    key: '3',
    label: 'Dashboard',
    children: [
      {
        key: '2-1',
        label: (
            <Link to="/add-new-service">Add Service</Link>
        )
      },
      {
        key: '2-2',
        label: (
            <Link to="/manage-service">Manage Service</Link>
        )
      },
      {
        key: '2-3',
        label: (
            <Link to="/booked-service">Booked Service</Link>
        ),
      },
      {
        key: '2-4',
        label: (
            <Link to="/service-to-do">Service To Do</Link>
        ),
      },
    ],
  }
];

const MenuBar = () => (
  <Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
         <MenuUnfoldOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default MenuBar;