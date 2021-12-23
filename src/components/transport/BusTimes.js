import Card from "../UI/Card";

const BusTimes = props => {
    return (
        <Card>
            <p>In minutes: <strong>{props.minutes}</strong>,
                arrival time: <strong>{props.arrivalTime}</strong></p>
        </Card>

    );
};

export default BusTimes;
