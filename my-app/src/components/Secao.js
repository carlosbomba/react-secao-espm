import React from "react";
import '../App.css';

function Secao() {
    return (
        <React.Fragment>
        <div className='secao-container sec1'>
            <h1>VIAGENS</h1>
            <p>É com a gente.</p>
            <button class="btn btn1">VER MAIS</button>
        </div>
        <div className='secao-container sec2'>
            <h1>URSOS</h1>
            <p>Também é com a gente.</p>
            <button class="btn btn2">VER MAIS</button>
        </div>
        <div className='secao-container sec3'>
            <h1>ABUTRES</h1>
            <p>Ai eu já não sei...</p>
            <button class="btn btn3">VER MAIS</button>
        </div>
        <div className='secao-container sec4'>
            <h1>PUGS</h1>
            <p>Não, não é com a gente.</p>
            <button class="btn btn4">VER MAIS</button>
        </div>
        </React.Fragment>
    );
};

export default Secao;