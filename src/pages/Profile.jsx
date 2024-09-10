import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext'; 

const Profile = () => {
  const { logout } = useContext(UserContext);

  return (
    <div className="container text-center">
      <h1>Perfil de Usuario</h1>
      <p>Email: usuario@ejemplo.com</p> 
      
      <button 
        className="btn btn-danger"
        onClick={logout} 
      >
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Profile;

