import * as React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import ContactDetails from "../section/contactdetails";
import Breadcrumb from "../components/breadcrumb";

const ContactUs=()=>{

    return(
        <>
            
            <Header/>
            <Breadcrumb page="contact"/>
            <ContactDetails/>
            <Footer/>
        </>
    )
}

export default ContactUs;

