import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/prospectos");
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <form className="bg-white p-6 rounded shadow w-80" onSubmit={handleLogin}>
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input className="border p-2 w-full mb-3" placeholder="Usuario" />
        <input
          className="border p-2 w-full mb-3"
          placeholder="Contraseña"
          type="password"
        />
        <button className="bg-blue-600 text-white w-full p-2 rounded">
          Entrar
        </button>
        <p className="text-sm mt-3 text-center">
          <Link to="/register">Crear cuenta</Link>
        </p>
      </form>
    </div>
  );
}
