import {Col, Container, Row} from "react-bootstrap";

const extras = {
    addonList: [
        {key: 1, category: 'Breakfast', type: 'juice', price: 1.40, quantity: 1},
        {key: 2, category: 'Breakfast', type: 'croissant', price: 0.90, quantity: 1},
        {key: 3, category: 'Breakfast', type: 'toast', price: 1.00, quantity: 1}
    ],
    isPaid: false
}

const booking = {
    checkin: '2021-12-22',
    checkout: '2021-12-24',
    confirmationCode: "TEST-12345",
    extras: extras.addonList,
    extrasPaid: extras.isPaid,
    hasAddons: !!extras,
}

const extrasContent = booking.extras.length > 0 ?
    <Row>
        <Col>
            <p>Addons purchased: {booking.extras?.length}</p>
            <ul className="list-group">
                <li className="list-group-item">
                    {booking.extras.map(extra => (
                        <p key={extra.key}> {extra.category} | {extra.type} | £{extra.price}</p>
                    ))}
                </li>
            </ul>
        </Col>
    </Row> :
    null

const Booking = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h2>Booking: {booking.confirmationCode}</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Check-in: {booking.checkin}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Check-out: {booking.checkout}</p>
                </Col>
            </Row>
            {extrasContent}
        </Container>
    );
};

export default Booking;
