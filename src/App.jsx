import { useState } from 'react'
import './App.css'

function Home() {


  return (
    <div id='Inicio' className='fundo'>
    <header  className='cabecalho'>
      <img className='logo' src="logo.png" alt="logo" width={80} ></img>

      <div className='botaoinicio'>
        <button className='inicio' onClick={() => document.getElementById("Inicio").scrollIntoView({behavior:"smooth"})} >Inicio</button>
        <button className='inicio'  onClick={() => document.getElementById("historia").scrollIntoView({behavior:"smooth"})}>Historia</button>
        <button className='inicio' onClick={() => document.getElementById("catalogo").scrollIntoView({behavior:"smooth"})}>Catalogo</button>
        <button className='inicio' onClick ={() => document.getElementById("Ananda").scrollIntoView({behavior:"smooth"})}>Fale Com a Ananda</button>

      </div>
    </header>
    
    <div className="main-hero">
    <div className='texthero'>
        <h2 className="aprenda">Aprenda a Fazer <br/>
        <span className='spanapp'>Drinks</span> Classicos
        </h2>
        <p className='paragrafo1'>Conheça nossa história,descubra sabores incriveis e converse com a Ananda sobre o universo da Mixologia.</p>

    <button className="botao1" onClick={() => document.getElementById("catalogo").scrollIntoView({behavior:"smooth"})}>Explorar Catalogo 🍸</button>
         <button className="botao1" onClick={() => document.getElementById("Ananda").scrollIntoView({behavior:"smooth"})}>💭Converse com a Ananda </button></div>
        
            
         </div>
        
         </div>
                 

 
 
       
  );
  }
export default Home
