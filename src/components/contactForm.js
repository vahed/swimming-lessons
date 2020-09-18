import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon,MDBCard,
        MDBCardBody,
        MDBModalFooter,
        MDBCardHeader } from 'mdbreact';
import "./contactForm.css";

const ContactForm = () => {
    return (

        <MDBContainer className="contactFormCont">
            <MDBRow>
                <MDBCol md="12">
                    <MDBCard>
                        <MDBCardBody>
                            <MDBCardHeader className="form-header warm-flame-gradient rounded">
                                <h3 className="my-3">
                                    <MDBIcon icon="envelope" /> Email Us:
                                </h3>
                            </MDBCardHeader>

                            <form name="contact" method="post" data-netlify="true">
                                <label htmlFor="defaultFormContactNameEx" className="grey-text">
                                    Your name
                                </label>
                                <input type="text" id="defaultFormContactNameEx" className="form-control" name="name" placeholder="Type full name" required />
                                <br />
                                <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                                    Your email
                                </label>
                                <input type="email" id="defaultFormContactEmailEx" className="form-control" name="email" placeholder="yourEmail@yahoo.com" required/>
                                <br />
                                <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                                    Phone number
                                </label>
                                <input type="tel" id="defaultFormContactPhoneEx" className="form-control" name="phone" placeholder="Your phone" required/>
                                <br />
                                <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                                    Your message
                                </label>
                                <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" name="message" placeholder="Type message" required/>
                                <div className="text-center mt-4">
                                    <MDBBtn className="formBtn" color="warning" outline type="submit">
                                        Send
                                        <MDBIcon far icon="paper-plane" className="ml-2" />
                                    </MDBBtn>
                                </div>
                            </form>

                            <MDBModalFooter>
                                <div className="font-weight-light">
                                </div>
                            </MDBModalFooter>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default ContactForm;



