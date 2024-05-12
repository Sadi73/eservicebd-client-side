import React, { useContext } from 'react';
import './Navbar.css';
import MenuBar from './MenuBar';
import { Link } from 'react-router-dom';
import CustomDropDown from './CustomDropDown';
import { AuthContext } from '../../Providers/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result)
            })
            .catch(error => console.log(error))
    };

    return (
        <div className='navbar shadow-lg'>
            <div className='navbar-start'>
                <div className='md:hidden'>
                    <MenuBar />
                </div>
                <Link to="/"><button className='text-3xl font-medium text-teal-500'>BD Services</button></Link>
            </div>

            <div className='navbar-center hidden md:flex'>
                <ul className='menu menu-horizontal '>
                    <li className='mx-5 text-teal-500'><Link to="/">Home</Link></li>
                    <li className='mx-5 text-teal-500'><Link to="service/all">Services</Link></li>
                    <li><CustomDropDown /></li>
                </ul>
            </div>

            <div className='navbar-end'>
                {!user?.email ?
                    <div className='flex gap-3'>
                        <Link to="/login"><button className='border px-5 py-3 text-teal-500 border-teal-500 hover:bg-teal-500 hover:text-white'>Login</button></Link>
                        <Link to="/register"><button className='border px-5 py-3 text-teal-500 border-teal-500 hover:bg-teal-500 hover:text-white'>Register</button></Link>
                    </div> :
                    <button
                        className='border px-5 py-3 text-teal-500 border-teal-500 hover:bg-teal-500 hover:text-white'
                        onClick={handleLogOut}
                    >Log Out</button>
                }
            </div>

        </div >
    );
};

export default Navbar;