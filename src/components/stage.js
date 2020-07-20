import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card, ListGroup, ListGroupItem  } from 'reactstrap';
import {stages} from "../data";
import "./stage.css";
/* */
/*import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';*/
import { MDBIcon } from "mdbreact";

const Stage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [getStage, setStage] = useState('');
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
        </div>
    );
};

export default Stage;