import { useState } from 'react'
import './App.css'

function Hero() {

  const [modalAberto,setmodalAberto]= useState(false);

    return (

     
            <main id='historia'>
           <div className='herofundo'>
            <div className='herotext'><p className='p1'>A Historia</p>
                <h2 className='h2-1'>A Historia da Mixologia <br/>
                e dos Drinks</h2>
                <p>A mixologia e uma arte antiga que combina historia,cultura e sabor.Desde as civilizações antigas até os bares modernos,os drinks sempre estiveram presentes em momentos especias.</p>
                <button className='lermais' onClick={() =>setmodalAberto(true)}>Ler Mais → </button></div>

           
           <div className='herotext1'>
            <div className='card'><img src="hero1.png" alt="hero1" width={100}></img>
            <h4>Origens Antigas</h4>
            <p>Civilizações antigas ja preparavam bebidas de rituias e medicinais</p>

            </div>
            <div className='card'><img src="hero2.png" alt="hero2" width={100}></img>
            <h4>Seculo XIX</h4>
            <p>O nascimento dos coqueteis modernos e dos bares classicos</p></div>
            <div className='card'><img src="hero3.png" alt="hero3" width={100}></img>
            <h4>Atualidade</h4>
            <p> A mixologia se reinventa constantemente com criatividade e tecnica</p></div>
            <div className='card'><img src="hero6.png" alt="hero5" width={100} height={100}></img>
                <h4>Mixologia</h4>
                <p>A mixologia é a arte de criar e aperfeiçoar coquetéis, combinando técnica e criatividade. </p></div>
            {modalAberto && ( <div className='modal'>
                <h4 className='h4-2'>A Historia da Mixologia</h4>
                <img src="hero4.png" alt="hero4"width={250}></img>
                <p className='p-2'>A palavra "Mixologia" vem do inglês "Mixology" e se refere á arte de misturar ingredientes para criar bebidas incriveis.Desde os antios egipcios, que fermatevam frutas e mel ,até os bartenders modernos que usam tecnicas avançadas, os drinks sempre foram um forma de celebrar momentos e conetar pessoas.</p>
                    <button className='Fecharmodal' onClick={()=> setmodalAberto(false)}>Fechar </button>
                    
             </div>)}
           </div>
           </div>




            </main>
        
    )
}
export default Hero