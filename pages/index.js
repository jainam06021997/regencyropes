import React from 'react';
import Layout from "../components/Layout";
import Preloader from "../components/Preloader";
import MobileMenu from "../components/MobileMenu";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import BlogHome from "../components/BlogHome";
import CTAThree from "../components/CTAThree";
import Contact from "../components/Contact";
import Services from "../components/Services";
import CTAOne from "../components/CTAOne";
import FunFact from "../components/FunFact";
import CTATwo from "../components/CTATwo";
import Team from "../components/Team";
import Pricing from "../components/Pricing";
import VideoOne from "../components/VideoOne";
import AppScreen from "../components/AppScreen";
import FAQ from "../components/FAQ";
import Clients from "../components/Clients";
import Testimonials from "../components/Testimonials";
import SimpleChatBot from '../components/SimpleChatBot';

const HomePage = () => {
  const [showChat, setShowChat] = React.useState(false);
  return (
    <div>
      <Preloader />

      <Layout pageTitle="Regency Rope">
        <Header
          btnClass="main-nav__btn"
          extraClassName="site-header-one__fixed-top"
        />
        {/* <MobileMenu /> */}
        <Banner />
        {/* <Services /> */}
        {/* <CTAOne /> */}
        {/* <FunFact /> */}
        {/* <CTATwo /> */}
        <Pricing />
        {/* <Testimonials /> */}
        {/* <Clients /> */}
        {/* <Team /> */}
        {/* <VideoOne /> */}
        <AppScreen />
        {/* <FAQ /> */}
        {/* <BlogHome /> */}
        <Contact />
        {/* <CTAThree /> */}
        <Footer />
        <div style={{bottom: 0, right : 0, position: 'fixed', width: 350}}>
          <div style ={{display: showChat ? "" : "none"}}>
            <SimpleChatBot></SimpleChatBot>
          </div>
          <div>
            <button
              style={{fontSize: 20, float: 'right', width: '100%', padding: 8}}
              type="button"
              onClick={() => setShowChat(!showChat)}
              className="thm-btn pricing-one__btn"
            >
              <span>
                {!showChat ? 'click to chat...' : 'click to hide...' }
              </span>
            </button>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
