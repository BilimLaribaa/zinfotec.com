import * as React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Breadcrumb from "../components/breadcrumb";
import AboutDetails from "../section/aboutsection";
import WhyChooseUs from "../section/aboutwhychoose";
import BrandSection from "../section/brandsection";

const About=()=>{

    return(
        <>
            <Header/>
            <Breadcrumb page="about" />
            <AboutDetails/>
            <WhyChooseUs/>
            <BrandSection/>
            <Footer/>
        </>
    )
}

export default About;

