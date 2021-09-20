import React from 'react';
import './Dashcard.css';
import Dots from '../../img/dots.svg';
import Work from '../../img/icon-work.svg'

const Dashcard = (props) =>{
  console.log(props.teste.color);

  return(
    <div className="dashcard-card" style={{background: `var(${props.teste.color})`}}>
      <span>
        <img src={Work} alt="" class="dashcard-imagem-title"/>
      </span>
      <div className="dashcard-infos">
        <div className="dashcard-title">
          <h4>{props.teste.title}</h4>
          <img src={Dots} alt="tres pontos"/>
        </div>
        <h1>{props.teste.timeframes.daily.current}hrs</h1>
        <p>Last Week - {props.teste.timeframes.daily.previous}hrs</p>
      </div>
    </div>
  )
}

export default Dashcard