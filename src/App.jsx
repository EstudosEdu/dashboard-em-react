import React, {useState} from 'react';
import './App.css'
import Perfil from './components/perfil/Perfil.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx'

function App(props) {
  const [opt, setOpt] = useState(1)

  return (
    <div className="app-container">
      <Perfil setOpt={setOpt}/>
      <Dashboard opt={opt}/>
    </div>
  )
}

export default App;