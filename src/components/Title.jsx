import React from "react";
import '../styles/Title.css'
function Title(){
    return (
        <div className="title">
            <h1>Faça resumo de Artigos com <br /><span>API de OpenAI</span></h1>
            <p>Esta é uma ferramenta para trabalhar com artigos que pode ser usado 
                para transformar artigos longos num resumo claro e consiso</p>
        </div>
    )
}

export default Title;