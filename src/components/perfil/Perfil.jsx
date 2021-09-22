import React from 'react';
import './Perfil.css';

const Perfil = (props) =>{
  const imagem = "./assets/img/image-jeremy.png";
  
  return(
    <>
      <div className="perfil-container-geral">
        <div className="sla">
          <div className="perfil-cont-report">
            <div className="perfil-container">
            <img src={imagem} alt="" className="perfil-imagem" />
            </div>
            <p id="perfil-report">Report for</p>
            <h2 id="perfil-nome">Jeremy<br/>Robson</h2>
          </div>
        </div>
        <div className="perfil-days">
          <h4 onClick={()=> props.setOpt(1)}>Daily</h4>
          <h4 onClick={()=> props.setOpt(2)}>Weekly</h4>
          <h4 onClick={()=> props.setOpt(3)}>Monstly</h4>
        </div>
      </div>
    </>
  )
}

export default Perfil