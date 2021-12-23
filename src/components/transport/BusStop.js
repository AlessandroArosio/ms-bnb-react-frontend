import {Accordion, Col, Row} from "react-bootstrap";
import BusService from "./BusService";

const BusStop = props => {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header><strong>{props.stopName}</strong></Accordion.Header>
                <Accordion.Body>
                    <li className="list-group-item">
                        <Row>
                            <Col>
                                <ul className="list-group">
                                    {props.busInfos.map(bus => (
                                        <BusService
                                            key={bus.busNumber}
                                            busNumber={bus.busNumber}
                                            destination={bus.busRoute}
                                            busTimes={bus.busTimes}/>
                                    ))}
                                </ul>
                            </Col>
                        </Row>
                    </li>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

    );
};

export default BusStop;
