const BusTimes = props => {
    return (
        <p>In minutes: <strong>{props.minutes}</strong>,
            arrival time: <strong>{props.arrivalTime}</strong></p>
    );
};

export default BusTimes;
