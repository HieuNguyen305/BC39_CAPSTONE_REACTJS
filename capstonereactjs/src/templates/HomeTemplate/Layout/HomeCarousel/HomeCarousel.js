import React, { useEffect } from 'react'
import { Carousel } from 'antd';
import { useSelector, useDispatch } from 'react-redux';


import axios from 'axios';
import { getCarouselAction } from '../../../../redux/actions/CarouselActions';

const contentStyle = {
    height: '800px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
};

export default function HomeCarousel(props) {



    const { arrImg } = useSelector(state => state.CarouselReducer)

    const dispatch = useDispatch();


    useEffect(() => {

        //const action = getCarouselAction(1);

        dispatch(getCarouselAction());

    }, [])




    const renderImg = () => {

        return arrImg.map((item, index) => {
            return <div key={index}>

                <div style={{ ...contentStyle, background: `url(${item.hinhAnh})` }}>

                    <img src={item.hinhAnh} className='w-full h-full' alt={item.hinhAnh} />

                </div>
            </div>
        })
    }

    return (
        <Carousel effect='fade'>
            {renderImg()}
        </Carousel>
    )
}
