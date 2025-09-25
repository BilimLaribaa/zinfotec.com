import * as React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Breadcrumb from "../components/breadcrumb";
import IndoorOutdoorProducts from "../components/indooroutdoorproducts";

const InDoor=()=>{

    return(
        <>
            
            <Header/>
            <Breadcrumb page={"indoor"}/>
            <IndoorOutdoorProducts page={"indoor"}/>
            <Footer/>
        </>
    )
}

export default InDoor;

