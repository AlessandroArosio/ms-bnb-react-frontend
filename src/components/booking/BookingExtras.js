import {Col, Row} from "react-bootstrap";

const BookingExtras = (params) => {
    if (!params.extras || params.extras.length === 0) {
        return '';
    }

  return (
      <Row>
          <Col>
              <p>Addons purchased: {params.extras.length}</p>
              <ul className="list-group">
                  <li className="list-group-item">
                      {params.extras.map(extra => (
                          <p key={extra.key}> {extra.category} | {extra.type} | £{extra.price}</p>
                      ))}
                  </li>
              </ul>
          </Col>
      </Row>
  );
};

export default BookingExtras;
