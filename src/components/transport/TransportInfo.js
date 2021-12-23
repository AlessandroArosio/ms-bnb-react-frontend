import {Col, Row} from "react-bootstrap";
import BusStop from "./BusStop";

const TransportInfo = (params) => {
    return (
        <Row>
            <Col>
                <ul className="list-group">
                    {params.busResponse.map(info => (
                        <BusStop stopName={info.stopName} key={info.stopId} busInfos={info.busInfos} />
                    ))}
                </ul>
            </Col>
        </Row>
    );
};

export default TransportInfo;
