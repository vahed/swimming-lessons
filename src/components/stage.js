import React, { useState } from 'react';
import { Jumbotron, Container, Collapse, Button, CardBody, Card, ListGroup, ListGroupItem  } from 'reactstrap';
import {stages} from "../data";
import "./stage.css";
import { MDBIcon } from "mdbreact";

const Stage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (

        <div className="stageBlock">
            <h4>Find the stage suitable to your need</h4>
            <Button className="stageButton" color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}><MDBIcon icon="swimmer" size="1g" className="cyan-text pr-3" />Stages</Button>
            <Collapse isOpen={isOpen}>
                <Card>
                    <CardBody>
                        {stages.map((info) =>
                            <ListGroup key={info.id}>
                            <ListGroupItem>
                                <MDBIcon icon="angle-double-right" size="1g" className="cyan-text pr-3" /><span className="stage">{info.name}</span><br/><span className="stageCaption"><p>{info.des}</p></span>
                            </ListGroupItem>
                            </ListGroup>
                        )}

                    </CardBody>
                </Card>
            </Collapse>

            <Jumbotron fluid>
                <Container fluid>
                    <h5 className="h1_stg">SWIMMING LESSONS AT HOME/SCHOOLS</h5>
                    <p className="p1_stg">Swimming lessons at home or in schools are becoming more and more popular these days. If you have a private pool in your school, apartment block, basement or garden, you may wish to consider our private and confidential service of professional swimming lessons conducted in the comfort of your own place.</p>
                    <p className="p1_stg">We offer a bespoke service which include kids all levels, adults beginners and intermediate . These lessons are offered on a 1-2-1, 2:1 or 3:1 basis. </p>
                    <p className="p1_stg">For school classes, we allow maximum 10 students at the time, so if you have 30 students we can divide them into 3 groups, each group get 20 minutes sessions, and we will get all the class covered in 1 hour, dependent on your needs.</p>
                    <p className="p1_stg">How long will home/school swimming lessons last?

                        Recommended duration for home/school swimming lessons to kids is 30 minutes, however we do offer longer duration lessons should you request this. For adults we recommend a minimum of 40 minutes.</p>
                    <p className="p1_stg">Based in Gothenburg and currently covering all Gothenburg for home/school swimming lessons.</p>
                    <p className="p1_stg">The process is simple, we arrange a time convenient to both parties to conduct the lesson, then our teacher will travel to your place, with the necessary equipment to conduct the lesson and deliver a bespoke private & confidential service tailored to meet your individual needs.</p>
                    <p className="p1_stg">We will confirm time slots and days which we can be committed to on a weekly basis over a term (12 weeks). </p>
                    <p className="p1_stg">The secret is in the Action! For enquiries around availability/prices please contact us via email gesschool@outlook.com </p>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Stage;