import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import Login from './App/Vistas/Login/login';
import HomeUsuario from './App/Vistas/Home/Home';
import Header from './App/Componentes/Header/Header';
import Footer from './App/Componentes/Footer/Footer';
import HomeChofer from './App/Vistas/Home_chofer/Home_chofer';
import Perfil from './App/Vistas/Perfil/Perfil';
import ConfirmarViaje from './App/Vistas/Confirmar_viaje/Confirmar_viaje';

export const ReadAppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={
            <>
              <Header />
              <div style={{ margin: '0.5rem', paddingBottom: '5rem' }}>
                <Routes>
                  <Route path="/" element={<Navigate to="/login" />} />
                  <Route path="/Home" element={<HomeUsuario />} />
                  <Route path="/Perfil_Usuario" element={<Perfil />} />
                  <Route path="/Confirmar_viaje" element={<ConfirmarViaje />} />
                </Routes>
              </div>

              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
};

export const ReadAppRouter = () => (
  <Router>
    <ReadAppRoutes />
  </Router>
);
