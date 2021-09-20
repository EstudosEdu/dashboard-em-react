import React from 'react';
import './Perfil.css';

const Perfil = () =>{
  const imagem = "https://media-exp1.licdn.com/dms/image/C4E03AQGH0O-WcK6k5g/profile-displayphoto-shrink_200_200/0/1628891939101?e=1637193600&v=beta&t=fw4hRXRhW7sAlGS_KqSOfux3xQUMGYjrD4TtpgksdXs";
  
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
          <h4>Daily</h4>
          <h4>Weekly</h4>
          <h4>Monstly</h4>
        </div>
      </div>

    </>
  )
}

export default Perfil