import React from 'react'
import App from '../../App'
import './gestor.css'


const Gestor = ()=>{
    return (
        <div className="gestor">
           <div className="gestor-logo">
               <img 
               src="https://media-exp1.licdn.com/dms/image/C4D0BAQGLrqI03h95OQ/company-logo_200_200/0/1583170451846?e=2159024400&v=beta&t=TACgDEGCIJfii_1_K6SK7sBDLR-wp9jcdgHXme7vgLQ"
               alt = "Gestor App"
               />
               
           </div>
            <div className = "gestor-right">
                <center>Gestão de Atendimentos</center>
               <br/>
               <br/>
               <br/>
                
                <h2>Tipos de Atendimentos: </h2>
                <br/>
                <br/>

                <button type = "submit">
                    Consultar
                    </button>

                <button type = "submit">
                    Excluir
                    </button>

                    <button type = "submit">
                    Adicionar
                    </button>

                    <button type = "submit">
                    Desativar
                    </button>
                    <br/>
                    <br/>
                
                <h2>Técnicos disponíveis: </h2>
                <br/>
                <br/>

                <button type = "submit">
                    Consultar
                    </button>

                <button type = "submit">
                    Excluir
                    </button>

                    <button type = "submit">
                    Adicionar
                    </button>

                    <button type = "submit">
                    Desativar
                    </button>
                
                
                
                
                </div>
                </div>


    )
}
export default Gestor;