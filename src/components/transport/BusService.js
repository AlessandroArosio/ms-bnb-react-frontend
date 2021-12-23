import BusTimes from "./BusTimes";

const BusService = props => {
  return (
      <li className="list-group-item">Bus number: {props.busNumber} -
          Destination {props.busRoute}
          <br/><br/>
          {props.busTimes.map(time => (
              <BusTimes key={time.key} minutes={time.minutes} arrivalTime={time.arrivalTime} />
          ))}
      </li>
  );
};

export default BusService;
