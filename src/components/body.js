import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import "./body.css";
import {MDBIcon} from "mdbreact";

const Body = () => {
    return(
        <div className="body1">
            <Row className="row1">
                <Col sm="4">
                    <Card body>
                        <CardTitle>Children all levels</CardTitle>
                        <CardText>12 classes for 1800KR</CardText>
                        <Button><a href="https://forms.app/gesschool/gess-registeration-form">Book</a></Button>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card body>
                        <CardTitle>Adults beginner</CardTitle>
                        <CardText>12 classes for 2000KR</CardText>
                        <Button><a href="https://forms.app/gesschool/gess-registeration-form">Book</a></Button>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card body>
                        <CardTitle>Adults intermediate</CardTitle>
                        <CardText>12 classes for 2000KR</CardText>
                        <Button><a href="https://forms.app/gesschool/gess-registeration-form">Book</a></Button>
                    </Card>
                </Col>
            </Row>
            <hr className="bodyHr"/>
            <Row className="row2">
                <Col sm="4">
                    <Card body>
                        <CardTitle>One to one children</CardTitle>
                        <CardText>300KR per class (30 minutes)</CardText>
                        <Button><a href="https://forms.app/gesschool/gess-registeration-form">Book</a></Button>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card body>
                        <CardTitle>Notice</CardTitle>
                        <CardText>330KR per class (30 minutes)</CardText>
                        <Button><a href="https://forms.app/gesschool/gess-registeration-form">Book</a></Button>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card body>
                        <CardTitle>Children all levels</CardTitle>
                        <CardText>prices include entrance fees</CardText>
                        <Button><a href="https://forms.app/gesschool/gess-registeration-form">Book</a></Button>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Body;