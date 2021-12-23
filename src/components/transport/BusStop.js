import {Col, Row} from "react-bootstrap";
import BusService from "./BusService";

const BusStop = props => {
    return (
        <li className="list-group-item">
            <h3>{props.stopName}</h3>
            <Row>
                <Col>
                    <ul className="list-group">
                        {props.busInfos.map(bus => (
                            <BusService
                                key={bus.key}
                                busNumber={bus.busNumber}
                                destination={bus.busRoute}
                                busTimes={bus.busTimes} />
                        ))}
                    </ul>
                </Col>
            </Row>
        </li>
    );
};

export default BusStop;
