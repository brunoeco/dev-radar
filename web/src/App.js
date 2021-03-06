import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem/index';
import DevForm from './components/DevForm/index';

function App() {
  const [ devs, setDevs ] = useState([]);

  
  async function loadDevs() {
    const response = await api.get('/devs');

    setDevs(response.data);

  };

  useEffect(() => {
    loadDevs();

  }, [])

  async function handleAddDev(data) {

    const response = await api.post('/devs', data);

    loadDevs();
  };


  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />

      </aside>
      <main>
        <div>
          <ul>
            {devs.map(dev => (
              <DevItem key={dev._id} dev={dev} />
            ))}
            
          </ul>
        </div>

      </main>
    </div>
  );
}

export default App;
