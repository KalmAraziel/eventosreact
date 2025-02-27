import React from 'react';
import Header from './components/Header';
import CategoriasProvider from './context/CategoriasContext';
import EventosProvider from './context/EventosContext';
import Formulario from './components/Formulario';



function App() {
  return (
    <EventosProvider>
      <CategoriasProvider>
        <Header />
        <div className="uk-container">
            <Formulario></Formulario>
        </div>
      </CategoriasProvider>
    </EventosProvider>

  );
}

export default App;
