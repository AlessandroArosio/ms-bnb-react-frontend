import {Col, Row} from "react-bootstrap";
import {Fragment} from "react";

const BookingInfo = (params) => {
    return (
        <Fragment>
            <Row>
                <Col>
                    <h2>Booking: {params.confirmationCode}</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Check-in: {params.checkin}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Check-out: {params.checkout}</p>
                </Col>
            </Row>
        </Fragment>
    );
};

export default BookingInfo;
