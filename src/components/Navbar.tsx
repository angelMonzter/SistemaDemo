export function Navbar() {

    return (
        <>
            <header className="bg-white p-4 shadow-md flex justify-between items-center">
                <h1 className="text-xl font-bold">Prospectos</h1>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow">
                    Agregar Nuevo
                </button>
            </header>
        </>
    );
}
