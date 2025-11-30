import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    navigate("/prospectos");
  }

  return (
    <div class="h-screen flex items-center justify-center bg-gray-200">
      <form class="bg-white p-6 rounded shadow w-80" onSubmit={handleLogin}>
        <h2 class="text-xl font-bold mb-4">Login</h2>
        <input class="border p-2 w-full mb-3" placeholder="Usuario" />
        <input
          class="border p-2 w-full mb-3"
          placeholder="Contraseña"
          type="password"
        />
        <button class="bg-blue-600 text-white w-full p-2 rounded">
          Entrar
        </button>
        <p class="text-sm mt-3 text-center">
          <Link to="/register">Crear cuenta</Link>
        </p>
      </form>
    </div>
  );
}
