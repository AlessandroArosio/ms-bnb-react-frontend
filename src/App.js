import './App.css';
import {Route, Routes} from "react-router-dom";
import Layout from "./layout/Layout";
import Welcome from "./pages/Welcome";
import Booking from "./pages/Booking";
import Transport from "./pages/Transport";
import ThingsToDo from "./pages/ThingsToDo";
import Restaurant from "./pages/Restaurant";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Welcome />} />
                <Route path='/booking' element={<Booking />} />
                <Route path='/transport' element={<Transport />} />
                <Route path='/things-to-do' element={<ThingsToDo />} />
                <Route path='/restaurant' element={<Restaurant />} />
            </Routes>
        </Layout>
    );
}

export default App;
