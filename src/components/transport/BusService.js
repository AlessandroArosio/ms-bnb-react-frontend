import BusTimes from "./BusTimes";
import Card from "../UI/Card";

const BusService = props => {
    return (
        <Card>
            <li className="list-group-item">
                <p>Bus number: <strong>{props.busNumber}</strong> -
                    Destination: <strong>{props.destination}</strong></p>
                {props.busTimes.map(time => (
                    <BusTimes
                        key={Math.random()}
                        minutes={time.minutes}
                        arrivalTime={time.arrivalTime}/>
                ))}
            </li>
        </Card>
    );
};

export default BusService;
