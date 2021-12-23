import {Container} from "react-bootstrap";
import TransportInfo from "../components/transport/TransportInfo";

const busResponse = [
    {
        key: 'r1',
        busRoute: 'route',
        stopId: 'stop id 3',
        stopName: 'Whatever stop name',
        busInfos: [
            {
                key: 'bus1',
                busNumber: '2',
                busRoute: 'nowhere',
                busTimes: [
                    {
                        key: 't1',
                        busDestination: 'home',
                        arrivalTime: 'now',
                        minutes: 4
                    },
                    {
                        key: 't2',
                        busDestination: 'home',
                        arrivalTime: 'now',
                        minutes: 6
                    },
                    {
                        key: 't3',
                        busDestination: 'home',
                        arrivalTime: 'now',
                        minutes: 9
                    }
                ]
            }]
    }
];

const Transport = () => {
    return (
        <Container>
            <TransportInfo busResponse={busResponse} />
        </Container>
    );
};

export default Transport;
