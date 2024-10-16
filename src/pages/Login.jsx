
import React from 'react';

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          Email:
          <input type="email" />
        </label>
        <label>
          Contraseña:
          <input type="password" />
        </label>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}

export default Login;
