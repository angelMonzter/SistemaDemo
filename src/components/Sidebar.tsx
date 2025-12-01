export function Sidebar() {
  return (
    <>
      <aside className="w-64 h-screen fixed left-0 top-0 bg-gray-900 text-white flex flex-col shadow-xl overflow-y-auto">

        <div className="p-6 text-2xl font-bold border-b border-gray-700">
          Demo
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <a href="/prospectos" className="block p-3 rounded bg-gray-800 font-semibold">
            Prospectos
          </a>
          <a href="/clientes" className="block p-3 rounded hover:bg-gray-800">
            Clientes
          </a>
          <a href="/calendario" className="block p-3 rounded hover:bg-gray-800">
            Calendario
          </a>
        </nav>

      </aside>
    </>
  );
}
