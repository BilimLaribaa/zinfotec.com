import * as React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Breadcrumb from "../components/breadcrumb";
import ProductDetails from "../components/productsdetails";

const Products_Details=()=>{

    return(
        <>
            
            <Header/>
            <Breadcrumb page="productsdetails"/>
            <ProductDetails/>
            <Footer/>
        </>
    )
}

export default Products_Details;

