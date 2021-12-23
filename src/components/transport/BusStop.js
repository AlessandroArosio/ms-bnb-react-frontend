import {Col, Row} from "react-bootstrap";
import BusService from "./BusService";

const BusStop = props => {
    return (
        <li className="list-group-item">
            <h3>{props.stopName}</h3>
            <h4>Services:</h4>
            <Row>
                <Col>
                    <ul className="list-group">
                        {props.busInfos.map(bus => (
                            <BusService
                                key={bus.key}
                                busNumber={bus.busNumber}
                                destination={bus.busRoute}
                                busTimes={bus.busTimes} />
                            // <li className="list-group-item" key={bus.key}>Bus number: {bus.busNumber} -
                            //     Destination {bus.busRoute}
                            //     <br/><br/>
                            //     {bus.busTimes.map(time => (
                            //         <p key={time.key}>In minutes: <strong>{time.minutes}</strong>,
                            //             arrival time: <strong>{time.arrivalTime}</strong></p>
                            //     ))}
                            // </li>
                        ))}
                    </ul>
                </Col>
            </Row>
        </li>
    );
};

export default BusStop;
