import {Container} from "react-bootstrap";
import BookingInfo from "../components/booking/BookingInfo";
import BookingExtras from "../components/booking/BookingExtras";

const extras = {
    addonList: [
        {key: 1, category: 'Breakfast', type: 'juice', price: 1.40, quantity: 1},
        {key: 2, category: 'Breakfast', type: 'croissant', price: 0.90, quantity: 1},
        {key: 3, category: 'Breakfast', type: 'toast', price: 1.00, quantity: 1}
    ],
    isPaid: false
}

const booking = {
    checkin: '2021-12-22',
    checkout: '2021-12-24',
    confirmationCode: "TEST-12345",
    extras: extras.addonList,
    extrasPaid: extras.isPaid,
    hasAddons: !!extras,
}

const Booking = () => {
    return (
        <Container>
            <BookingInfo
                confirmationCode={booking.confirmationCode}
                checkin={booking.checkin}
                checkout={booking.checkout} />
            <BookingExtras extras={booking.extras} />
        </Container>
    );
};

export default Booking;
