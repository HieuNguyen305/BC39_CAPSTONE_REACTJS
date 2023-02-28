import React from 'react'
import { Carousel } from 'antd';

const contentStyle = {
    height: '500px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};


export default function HomeCarousel() {
    return (
        <Carousel autoplay style={{position:'relative'}}>
            <div>
                <h3 style={contentStyle}>
                    <img src='https://picsum.photos/1000' className='w-full' alt='123' />
                </h3>
            </div>
            <div>
                <h3 style={contentStyle}>
                    <img src='https://picsum.photos/1000' className='w-full' alt='123' />
                </h3>
            </div>
            <div>
                <h3 style={contentStyle}>
                    <img src='https://picsum.photos/1000' className='w-full' alt='123' />
                </h3>
            </div>
            <div>
                <h3 style={contentStyle}>
                    <img src='https://picsum.photos/1000' className='w-full' alt='123' />
                </h3>
            </div>
        </Carousel>
    )
}
