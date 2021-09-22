import React, { useEffect, useState } from 'react';
import Dashcard from './dashcard/Dashcard.jsx';
import './Dashboard.css';
import axios from 'axios';

const Dashboard = (props) =>{
  const [dashboards, setDashboard] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:5001/dados')
      .then((res) =>{
        setDashboard(res.data);
      })
      console.log(props.opt);
  }, []);

  return(
    <div className="teste">
      {dashboards.map((dados)=>(
        <Dashcard dado={dados} opt={props.opt} />
      ))}
    </div>
  )
}

export default Dashboard