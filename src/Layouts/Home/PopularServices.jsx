import React from 'react';
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Meta } = Card;

const PopularServices = () => {
    const navigate = useNavigate();

    return (
        <div className='my-10'>
            <h1 className='text-3xl font-semibold text-center'>Popular Services</h1>
            <p className='text-center'>As a customer focused solution provider, we are dedicated to redefine the home improvement service experience for all users</p>

            <div className='card-container'>
                <Card
                    hoverable
                    style={{
                        width: 240,
                    }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                    <button
                        className='border border-teal-500 text-teal-500 px-3 py-2'
                        onClick={() => navigate('/service/1')}
                    >Details</button>
                </Card>

            </div>

        </div>
    );
};

export default PopularServices;