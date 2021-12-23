import {Container} from "react-bootstrap";
import TransportInfo from "../components/transport/TransportInfo";
import {useEffect, useState} from "react";
import axios from "axios";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const baseUrl = 'http://supernova:9090/api/v1/busInfo/busTimes';

const Transport = () => {
    const [response, setResponse] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        axios.get(baseUrl).then((resp) => {
            setResponse(resp.data);
        }).catch(err => {
            setError(err);
        });
    }, []);

    return (
        <Container>
            {!response && !error && <LoadingSpinner/>}
            {!response && error && <h3>An error has occurred</h3>}
            {response && !error && <TransportInfo busResponse={response}/>}
        </Container>
    );
};

export default Transport;
