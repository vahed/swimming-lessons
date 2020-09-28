import React,{useState} from 'react';
import "./footer.css";
import {MDBIcon} from "mdbreact";
import {Tooltip} from "reactstrap";

const Footer = (props) => {
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);
    return (
        <div className="grid-item item19">
        <div className="main-footer">
            <h3 className="address">
                Address: Hammarkulletorget 63, 424
            </h3>
            <h3>37 Angered</h3>
            <hr/>
            <div className="row">
                <div className="d-flex flex-column">
                    <MDBIcon icon="phone-square-alt" className="inst p-2" />
                    <MDBIcon icon="far fa-envelope-square" className="inst p-2" />
                    <a href="https://www.instagram.com/geswimmingschool/"><MDBIcon fab icon="instagram" className="inst p-2" /></a>
                    <a href="https://www.facebook.com/Gothenburgenglishswimmingschool/"><MDBIcon fab icon="facebook-square" className="facebk p-2" /></a>
                </div>
                <div className="d-flex flex-column">
                    <text className="footer-phone">
                        <span style={{textDecoration: "none", color:"blue"}} href="#" id="TooltipExample">0734938365</span>
                        <Tooltip placement="right" isOpen={tooltipOpen} target="TooltipExample" toggle={toggle}>Email us now</Tooltip>
                    </text>
                    <text className="footer-phone">
                        <span style={{textDecoration: "none", color:"blue"}} href="#" id="TooltipExample">gesschool@outlook.com</span>
                        <Tooltip placement="right" isOpen={tooltipOpen} target="TooltipExample" toggle={toggle}>Call us now</Tooltip>
                    </text>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Footer;