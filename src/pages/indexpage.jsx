import * as React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import HomeBanner from "../section/homebanner";
import HomeService from "../section/homeservice";
import HomeOffer from "../section/homeoffer";
import FurnitureLimitedOffer from "../section/homelimitedoffer";
import TestimonialSection from "../section/testimonial";
import BestSellers from "../section/bestsellers";
import BlogSection from "../section/blogsection";
import BrandSection from "../section/brandsection";
import LedRating from "../section/ledrating";
import TrendyCards from "../section/trendycards";
import FeaturedCards from "../section/featuredcards";

const Home=()=>{

    return(
        <>
            
            <Header/>
        
            <HomeBanner/>
            <HomeService/>
            <HomeOffer/>
            <FeaturedCards/>
            <LedRating/>
            <TrendyCards/>
            <FurnitureLimitedOffer/>
            <TestimonialSection/>
            <BestSellers/>
            <BlogSection/>
            <BrandSection/>

            <Footer/>
        </>
    )
}

export default Home;

