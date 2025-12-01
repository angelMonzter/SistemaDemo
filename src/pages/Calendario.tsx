import { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import listPlugin from '@fullcalendar/list';
import esLocale from '@fullcalendar/core/locales/es';

export default function Calendario() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 1300);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1300);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [eventos, setEventos] = useState([
    { id: "1", title: "Reunión con cliente", date: "2025-12-01" },
    { id: "2", title: "Llamada seguimiento", date: "2025-12-02" },
    { id: "2", title: "Llamada seguimiento", date: "2025-12-03" },
    { id: "2", title: "Llamada seguimiento", date: "2025-12-04" },
    { id: "2", title: "Llamada seguimiento", date: "2025-12-05" },
    { id: "2", title: "Llamada seguimiento", date: "2025-12-06" },
  ]);

  const [titulo, setTitulo] = useState("");
  const [fecha, setFecha] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const agregarEvento = (e: React.FormEvent<HTMLFormElement>) => {
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
    setTitulo("");
    setFecha("");
    setDescripcion("");
  };

  return (
    <div className="flex h-screen bg-gray-100">

      {/* SIDEBAR (oculta en móvil, visible en PC) */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* SIDEBAR MÓVIL */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}></div>
      )}

      <div className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white z-50 transform transition-transform duration-300 md:hidden
           ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <Sidebar />
      </div>


      {/* MAIN */}
      <div className="flex-1 flex flex-col md:ml-64">

        {/* NAVBAR */}
        <div className="md:hidden p-2 bg-white shadow">
          <button onClick={() => setSidebarOpen(true)}>
            <svg width="28" height="28" fill="gray">
              <path d="M4 7h20M4 14h20M4 21h20" stroke="gray" strokeWidth="2" />
            </svg>
          </button>
        </div>

        <Navbar />

        {/* CONTENT */}
        <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* CALENDARIO */}
          <div className="col-span-1 md:col-span-2 bg-white rounded shadow p-4">
            <h2 className="text-lg font-bold mb-3">Calendario</h2>

            {isMobileView ? (
              <FullCalendar
                plugins={[listPlugin]}
                initialView="listWeek"
                locale={esLocale}
                events={eventos}
                initialDate={new Date()} // ✅ Mes actual
                height="auto"
                dayMaxEventRows={true} // Habilita "+X más"
                eventDisplay="block"   // Asegura que los eventos se muestren como barras
                headerToolbar={{
                  left: 'prev,next today',
                  center: 'title',
                  right: 'listDay,listWeek,listMonth'
                }}
                views={{
                  listDay: { buttonText: 'Día' },
                  listWeek: { buttonText: 'Semana' },
                  listMonth: { buttonText: 'Mes' }
                }}

              />
            ) : (
              <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={eventos}
                locale={esLocale}
              />
            )}

          </div>

          {/* FORMULARIO */}
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
  );
}
