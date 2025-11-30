import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  function handleRegister() {
    navigate("/");
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <form className="bg-white p-6 rounded shadow w-80" onSubmit={handleRegister}>
        <h2 className="text-xl font-bold mb-4">Registro</h2>
        <input className="border p-2 w-full mb-3" placeholder="Nombre" />
        <input className="border p-2 w-full mb-3" placeholder="Correo" />
        <input
          className="border p-2 w-full mb-3"
          placeholder="Contraseña"
          type="password"
        />
        <button className="bg-green-600 text-white w-full p-2 rounded">
          Crear cuenta
        </button>
        <p className="text-sm mt-3 text-center">
          <Link to="/">Iniciar sesión</Link>
        </p>
      </form>
    </div>
  );
}
