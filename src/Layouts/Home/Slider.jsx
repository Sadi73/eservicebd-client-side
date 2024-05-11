import React from 'react';
import { Carousel } from 'antd';
import img1 from '../../assets/1.jpeg'
import img2 from '../../assets/2.jpeg'
import img3 from '../../assets/3.jpg'
import img4 from '../../assets/4.jpg'
import img5 from '../../assets/5.png'
import img6 from '../../assets/6.jpg'

// Corporate Event Management
// Wedding Planning Services
// Social Event Planning
// Experiential Marketing Events
// Trade Shows and Exhibitions
// Concert and Entertainment Events
// Nonprofit and Fundraising Events
// Sports Events Management
// Destination Management Services
// Virtual and Hybrid Event Planning

const Slider = () => (
    <Carousel
        autoplay
        autoplaySpeed={2000}
    >
        <div className='relative'>
            <img src={img1} alt="" className='w-full h-[600px]' />
            <div className='absolute w-full h-full top-0 left-0 bg-gradient-to-b from-black via-transparent to-transparent '>
                <h3 className='text-white text-5xl text-center'>Corporate Event</h3>
            </div>
        </div>
        {/* <div className='relative'>
            <img src={img2} alt="" className='w-full h-[600px]' />
            <div className='absolute w-full h-full top-0 left-0 bg-gradient-to-b from-black via-transparent to-transparent '>
                <h3 className='text-white text-5xl text-center'>Experiential Marketing Events</h3>
            </div>
        </div> */}
        <div className='relative'>
            <img src={img3} alt="" className='w-full h-[600px]' />
            <div className='absolute w-full h-full top-0 left-0 bg-gradient-to-b from-black via-transparent to-transparent '>
                <h3 className='text-white text-5xl text-center'>Social Event</h3>
            </div>
        </div>
        <div className='relative'>
            <img src={img4} alt="" className='w-full h-[600px]' />
            <div className='absolute w-full h-full top-0 left-0 bg-gradient-to-b from-black via-transparent to-transparent '>
                <h3 className='text-white text-5xl text-center'>Wedding Planning</h3>
            </div>
        </div>
        <div className='relative'>
            <img src={img5} alt="" className='w-full h-[600px]' />
            <div className='absolute w-full h-full top-0 left-0 bg-gradient-to-b from-black via-transparent to-transparent '>
                <h3 className='text-white text-5xl text-center'>Trade Shows and Exhibitions</h3>
            </div>
        </div>
        <div className='relative'>
            <img src={img6} alt="" className='w-full h-[600px]' />
            <div className='absolute w-full h-full top-0 left-0  '>
                <h3 className='text-white text-5xl text-center'>Concert and Entertainment Events</h3>
            </div>
        </div>
    </Carousel>
);
export default Slider;