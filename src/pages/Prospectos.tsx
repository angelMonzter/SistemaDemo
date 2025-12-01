import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import { useState } from "react";

export default function Prospectos() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const prospectos = [
    { id: 1, nombre: "Juan Pérez", correo: "juan@mail.com", telefono: "555-123" },
    { id: 2, nombre: "Ana López", correo: "ana@mail.com", telefono: "555-456" },
    { id: 3, nombre: "Carlos Ruiz", correo: "carlos@mail.com", telefono: "555-789" },
  ];

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
        <main className="p-6 overflow-auto">
          <div className="bg-white rounded-xl shadow-lg p-6">

            <h2 className="text-lg font-semibold mb-4">Lista de Prospectos</h2>

            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-3 border-b">Nombre</th>
                  <th className="p-3 border-b">Correo</th>
                  <th className="p-3 border-b">Teléfono</th>
                </tr>
              </thead>

              <tbody>
                {prospectos.map((p) => (
                  <tr
                    key={p.id}
                    className="hover:bg-gray-50 transition"
                  >
                    <td className="p-3 border-b">{p.nombre}</td>
                    <td className="p-3 border-b">{p.correo}</td>
                    <td className="p-3 border-b">{p.telefono}</td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        </main>
      </div>

    </div>
  );
}
