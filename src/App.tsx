import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Prospectos from "./pages/Prospectos";
import Clientes from "./pages/Clientes";
import Calendario from "./pages/Calendario";


export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/prospectos" element={<Prospectos />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/calendario" element={<Calendario />} />
        </Routes>
    );
}