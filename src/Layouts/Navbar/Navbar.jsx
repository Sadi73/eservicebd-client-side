import React, { useContext } from 'react';
import './Navbar.css';
import MenuBar from './MenuBar';
import { Link } from 'react-router-dom';
import CustomDropDown from './CustomDropDown';
import { AuthContext } from '../../Providers/AuthProvider';
import { Avatar, Dropdown, Space } from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons';



const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const items = [
        {
            key: '1',
            label: (
                <Link to="/update-profile">Update Profile</Link>
            ),
        },
        {
            label: 'Log Out',
            key: '2',
            onClick: () => handleLogOut()
        },
    ];

    const handleLogOut = () => {
        logOut()
            .then(result => {
            })
            .catch(error => console.log(error))
    };

    return (
        <div className='navbar shadow-lg'>
            <div className='navbar-start'>
                <div className='md:hidden'>
                    <MenuBar />
                </div>
                <Link to="/"><button className='text-3xl font-medium text-teal-500'>EServices BD</button></Link>
            </div>

            <div className='navbar-center hidden md:flex'>
                <ul className='menu menu-horizontal '>
                    <li className='mx-5 text-teal-500'><Link to="/">Home</Link></li>
                    <li className='mx-5 text-teal-500'><Link to="service/all">Services</Link></li>
                    {user && <li><CustomDropDown /></li>}
                </ul>
            </div>

            <div className='navbar-end'>
                {!user?.email ?
                    <div className='flex gap-3'>
                        <Link to="/login"><button className='border px-5 py-3 text-teal-500 border-teal-500 hover:bg-teal-500 hover:text-white'>Login</button></Link>
                        <Link to="/register"><button className='border px-5 py-3 text-teal-500 border-teal-500 hover:bg-teal-500 hover:text-white'>Register</button></Link>
                    </div> :
                    <div className='flex gap-2 items-center'>
                        <div className='text-sm'>
                            {user?.email}
                        </div>
                        <Dropdown
                            menu={{
                                items,
                            }}
                            trigger={['click']}
                        >
                            <Avatar
                                src={user?.photoURL}
                                style={{
                                    backgroundColor: '#87d068',
                                    cursor: 'pointer',
                                }}
                                icon={<UserOutlined />}
                            />

                        </Dropdown>
                    </div>
                }
            </div>

        </div >
    );
};

export default Navbar;