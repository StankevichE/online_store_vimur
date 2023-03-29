import './App.css';
import { Routes, Route } from "react-router-dom";
import {Container} from "react-bootstrap";
import {Home} from "./pages/Home";
import {Store} from "./pages/Store.js";
import {Contacts} from "./pages/Contacts";
import {NavbarMenu} from "./components/NavbarMenu";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import {v4 as uuidv4} from 'uuid';


function App() {


    return (
        <>
            <NavbarMenu

            />

            <Container classname="mb-4">
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/store" element={<Store />}/>
                    <Route path="/contacts" element={<Contacts />}/>

                </Routes>

            </Container>
        </>
    );
}

export default App;

