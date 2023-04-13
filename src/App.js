import './App.css';
import { Routes, Route } from "react-router-dom";
import {Container} from "react-bootstrap";
import {Home} from "./pages/Home";
import {Store} from "./pages/Store.js";
import {Contacts} from "./pages/Contacts";
import {NavbarMenu} from "./components/NavbarMenu";
import 'bootstrap/dist/css/bootstrap.min.css';
import Basket from "./components/Basket";

function App() {





    return (
        <>
            <NavbarMenu

            />

            <Container className="mb-4">
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/store" element={<Store />}/>
                    <Route path="/contacts" element={<Contacts />}/>
                    <Route path="/basket" element={<Basket />}/>

                </Routes>

            </Container>
        </>
    );
}

export default App;

