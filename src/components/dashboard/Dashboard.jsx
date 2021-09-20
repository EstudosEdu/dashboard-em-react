import React, { useEffect, useState } from 'react';
import Dashcard from './dashcard/Dashcard.jsx';
import './Dashboard.css';
import axios from 'axios';

const Dashboard = () =>{
  const [dashboards, setDashboard] = useState([]);//

  useEffect(()=>{
    axios.get('http://localhost:5001/dados')
      .then((res) =>{
        setDashboard(res.data);
      })
  }, []);

  return(
    <div className="teste">
      {dashboards.map((dados)=>(
        <Dashcard teste={dados} />
      ))}
    </div>
  )
}

export default Dashboard