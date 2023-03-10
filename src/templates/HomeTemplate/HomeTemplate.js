import { Fragment } from "react";
import React from "react";
import { Route } from "react-router";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import HomeCarousel from "./Layout/HomeCarousel/HomeCarousel";

const HomeTemplate = (props) =>{

    const {Component, ...restProps} = props;
    
    return <Route {...restProps} render={(propsRoute) =>{
        return <Fragment>
            <Header {...propsRoute} />
            <HomeCarousel {...propsRoute} />
            <Component {...propsRoute} />

            <Footer {...propsRoute} />
        
        </Fragment>
    }}/>
};

export default HomeTemplate;