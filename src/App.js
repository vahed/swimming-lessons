import React from 'react';
import './App.css';
import ImageCarousel from "./components/carousel";
import Body from "./components/body";
/* MDB icons to run */
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
import WebNavbar from "./components/Navbar";
/* end of MDB */
import Stage from "./components/stage";
import Introduction from "./components/introduction";
import Footer from "./components/footer";
import Map from './components/map';
import ContactForm from "./components/contactForm";
import {MDBIcon} from "mdbreact";
import "./App.scss";
import Video from "./components/video";

function App() {
    return (
        <div className="grid-container">
            <div className="grid-item item1"><span id="webNav"><WebNavbar /></span></div>
            <div className="grid-item item2"><ImageCarousel /></div>

            <div className="grid-item item3"></div>
            <div className="grid-item item4"><span id="intro"><Introduction /></span></div>
            <div className="grid-item item5"></div>

            <div className="grid-item item6">
                <span>
                    <a href="/"><MDBIcon icon="home" className="arrow-up1"/></a>
                </span>
            </div>
            <div className="grid-item item7"><span id="bdy"><Body /></span></div>
            <div className="grid-item item8"></div>
            <div className="grid-item item9">
            <span>
                    <a href="/"><MDBIcon icon="home" className="arrow-up2"/></a>
            </span>
            </div>
            <div className="grid-item item10"><span id="stg"><Stage /></span></div>
            <div className="grid-item item11"></div>
            <div className="grid-item item12"></div>
            <div className="grid-item item13"></div>
            <div className="grid-item item14">
            <span>
                    <a href="/"><MDBIcon icon="home" className="arrow-up3"/></a>
            </span>
            </div>
            <div className="grid-item item15">
                    <span id="video"><Video/></span>
            </div>
            <div className="grid-item item16">
            </div>
            <div className="grid-item item17"><span id="loc"><Map/></span></div>
            <div className="grid-item item18">
            <span>
                    <a href="/"><MDBIcon icon="home" className="arrow-up4"/></a>
            </span>
            </div>
            <Footer/>
            <div className="grid-item item20"></div>
        </div>
    );
}

export default App;
