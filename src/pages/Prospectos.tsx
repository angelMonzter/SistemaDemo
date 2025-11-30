import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Navbar";

export default function Prospectos() {

  const prospectos = [
    { id: 1, nombre: "Juan Pérez", correo: "juan@mail.com", telefono: "555-123" },
    { id: 2, nombre: "Ana López", correo: "ana@mail.com", telefono: "555-456" },
    { id: 3, nombre: "Carlos Ruiz", correo: "carlos@mail.com", telefono: "555-789" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">

      {/* SIDEBAR */}
      <Sidebar/>

      {/* MAIN */}
      <div className="flex-1 flex flex-col">

        {/* NAVBAR */}
        <Navbar/>

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
