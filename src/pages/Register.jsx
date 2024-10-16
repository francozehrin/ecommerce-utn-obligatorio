
import React from 'react';

function Register() {
  return (
    <div>
      <h2>Registro</h2>
      <form>
        <label>
          Nombre:
          <input type="text" />
        </label>
        <label>
          Email:
          <input type="email" />
        </label>
        <label>
          Contraseña:
          <input type="password" />
        </label>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Register;
