import { useLocation } from "react-router-dom";

export function Navbar() {
  const location = useLocation();

 const pageTitles: Record<string, string> = {
  "/prospectos": "Prospectos",
  "/clientes": "Clientes",
  "/calendario": "Calendario",
};


  const titulo = pageTitles[location.pathname] || "Dashboard";

  return (
    <header className="bg-white p-4 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold">{titulo}</h1>

      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow">
        Agregar Nuevo
      </button>
    </header>
  );
}
