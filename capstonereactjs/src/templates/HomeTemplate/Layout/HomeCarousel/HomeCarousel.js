import React, {useEffect, useState} from 'react'
import { Carousel } from 'antd';
import { useSelector } from 'react-redux';
import { repeat } from 'lodash';

import axios from 'axios';

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


    function useEffect(){
        const[posts,setPosts] = useState([])

        const[userId,serUserId] = useState("");


        const fetchData = () =>{
            axios
                .get("https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachBanner",{
                    params: {
                        userId: userId || undefined,
                    },
                })
                .then((respone)=>{
                    setPosts(respone.data);
                })
                .catch((error)=>{
                    console.log(error);
                });
        };


    }

    const renderImg = () => {

        return arrImg.map((item, index) => {
            return <div key={index}>

                <div style={{...contentStyle, background: `url(${item.hinhAnh})`}}>
                    
                        <img src={item.hinhAnh} className='w-full h-full' alt={item.hinhAnh} />
                    
                </div>
            </div>
        })
    }

    return (
        <Carousel autoplay style={{ position: 'relative' }}>

            {renderImg()}
        </Carousel>
    )
}
