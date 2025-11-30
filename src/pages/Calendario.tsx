import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Navbar";

export default function Calendario() {

  const [eventos, setEventos] = useState([
    { id: "1", title: "Reunión con cliente", date: "2025-01-15" },
    { id: "2", title: "Llamada seguimiento", date: "2025-01-17" },
  ]);

  const [titulo, setTitulo] = useState("");
  const [fecha, setFecha] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const agregarEvento = (e) => {
    e.preventDefault();

    if (!titulo.trim() || !fecha.trim()) {
      alert("Todos los campos son obligatorios");
      return;
    }

    const nuevo = {
      id: (eventos.length + 1).toString(),
      title: titulo,
      date: fecha,
      description: descripcion,
    };

    setEventos([...eventos, nuevo]);

    // limpiar form
    setTitulo("");
    setFecha("");
    setDescripcion("");
  };
  return (
    <div className="flex h-screen bg-gray-100">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <div className="flex-1 flex flex-col">

        {/* NAVBAR */}
        <Navbar />

        {/* CONTENT */}
        <div className="flex">
          <div className="flex-1 p-6 grid grid-cols-3 gap-6">
            {/* Calendario */}
            <div className="col-span-2 bg-white rounded shadow p-4">
              <h2 className="text-lg font-bold mb-3">Calendario</h2>

              <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                events={eventos}
                height="75vh"
                selectable={true}
                dateClick={(info) => setFecha(info.dateStr)}
              />
            </div>

            {/* Formulario */}
            <div className="bg-white rounded shadow p-4">
              <h2 className="text-lg font-bold mb-3">Agregar evento</h2>

              <form className="flex flex-col gap-3" onSubmit={agregarEvento}>
                <input
                  className="border p-2 rounded"
                  placeholder="Título"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                />

                <input
                  type="date"
                  className="border p-2 rounded"
                  value={fecha}
                  onChange={(e) => setFecha(e.target.value)}
                />

                <textarea
                  className="border p-2 rounded h-24"
                  placeholder="Descripción"
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                />

                <button className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                  Guardar evento
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
