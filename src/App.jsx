import React from 'react';
import './App.css'
import Perfil from './components/perfil/Perfil.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx'

function App() {

  return (
    <div className="app-container">
      <Perfil />
      <Dashboard />
    </div>
  )
}

export default App;