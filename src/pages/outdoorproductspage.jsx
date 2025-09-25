import * as React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Breadcrumb from "../components/breadcrumb";
import IndoorOutdoorProducts from "../components/indooroutdoorproducts";

const OutDoor=()=>{

    return(
        <>
            
            <Header/>
            <Breadcrumb page={"outdoor"}/>
            <IndoorOutdoorProducts page={"outdoor"}/>
            <Footer/>
        </>
    )
}

export default OutDoor;

