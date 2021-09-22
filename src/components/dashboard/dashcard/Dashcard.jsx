import React from 'react';
import './Dashcard.css';
import Dots from '../../../assets/img/dots.svg';


const Dashcard = (props) =>{
  
  return(
    <div className="dashcard-card" style={{background: `var(${props.dado.color})`}}>
      <span>
        <img src={`./assets/img/${props.dado.i}.svg`} alt="" class="dashcard-imagem-title"/>
      </span>
      <div className="dashcard-infos">
        <div className="dashcard-title">
          <h4>{props.dado.title}</h4>
          <img src={Dots} alt="tres pontos"/>
        </div>
        
        <h1>{
        props.opt == 1 && props.dado.timeframes.daily.current
        || props.opt == 2 && props.dado.timeframes.weekly.current 
        || props.opt == 3 && props.dado.timeframes.monthly.current 
        }hrs</h1>
        
        <p>Last Week - {
        props.opt == 1 && props.dado.timeframes.daily.previous 
        || props.opt == 2 && props.dado.timeframes.weekly.previous 
        || props.opt == 3 && props.dado.timeframes.monthly.previous 
        }hrs</p>
      </div>
    </div>
  )
}

export default Dashcard