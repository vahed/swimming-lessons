import React from 'react';
import './App.css';
import ImageCarousel from "./components/carousel";
import Body from "./components/body";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
/* MDB icons to run */
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
import WebNavbar from "./components/Navbar";
/* end of MDB */
import Stage from "./components/stage";
import ImageCrossFade from "./components/imageData";
import Introduction from "./components/introduction";
import { MDBIcon } from "mdbreact";
import Footer from "./components/footer";

function App() {
  return (
      <div className="grid-container">
        <div className="grid-item item1"><WebNavbar /><ImageCarousel /></div>
        <div className="grid-item item2"></div>
        <div className="grid-item item3"><Introduction/></div>
        <div className="grid-item item4"></div>
        <div className="grid-item item5"></div>
        <div className="grid-item item6"><Body /></div>
        <div className="grid-item item7"></div>
        <div className="grid-item item8"></div>
        <div className="grid-item item9"><Stage /></div>
        <div className="grid-item item10"></div>
        <div className="grid-item item11"><ImageCrossFade />
        </div>
        <div className="grid-item item12">12</div>
        <div className="grid-item item13">13</div>
        <div className="grid-item item14">14</div>
        <div className="grid-item item15">15</div>
        <div className="grid-item item16">16</div>
        <div className="grid-item item17">
            <Footer/>
        </div>
        <div className="grid-item item18">18</div>
    </div>
  );
}

export default App;
