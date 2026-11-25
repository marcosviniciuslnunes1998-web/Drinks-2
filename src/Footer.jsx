import { useState } from 'react'
import './App.css'


function Footer() {
    let endereco = "https://api.groq.com/openai/v1/chat/completions"
    const [Anandaconversa,setAnandaconversa]=useState(false);
    const [Conversa,setConversa]=useState ("");
    const [ChatIa,setChatIa]=useState([]);
      
    async function Ananda() {
        setChatIa(chatAnterior => [
        ...chatAnterior,
        {
            role: "user",
            content: Conversa
        }
    ]);
        let resposta = await fetch (endereco,{
            method:"POST",
            headers :{"Content-type": "application/json",
                "Authorization":"Bearer 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"

            },
            body:JSON.stringify({
                "model":"llama-3.3-70b-versatile",
                "messages":[{
                    "role":"system",
                    "content":"Você é uma mixologista e bartender , responda em portugues-br, tire duvidas sobre drinks e como faze-los",

                },
                ...ChatIa,
                {"role":"user",
                    "content":Conversa }

                ],
            })
        } )
    
     const dados = await resposta.json();
     console.log(dados)
     
     setChatIa(chatAnterior => [
        ...chatAnterior,
        {
            role: "assistant",
            content: dados.choices[0].message.content,
        }
    ]);
 setConversa("");
    }
    
    return (
    <footer id='Ananda' className='Footer'>
    <div className='fundofooter'> 
        <div className='footertext'>
            <p className='p3'>Fale com a Ananda</p>
            <h3 className='textfooter'>Converse sobre Drinks <br/>e Mixologia</h3>
            <p>Tem dúvidas, curiosidades ou quer sugestões de Drinks ? A Ananda está aqui para te ajudar!</p>
            <button className='conversa' onClick = {() => setAnandaconversa (true)}>Iniciar Conversa 💭</button>
        </div>
        <div className='finalfooter'>
 <img src="logo.png" width={50} height={40}></img>

<p className='p4'>© 2026 MN Softwers. Todos os Direitos Reservados</p></div>
{Anandaconversa && (<div className='modalconversa'>
<button className='fechar1' onClick={()=> setAnandaconversa (false)}>X</button>
<div className='text1'><h5>Ananda</h5>
<p>🟢 Online</p></div>
 
     
    {ChatIa.map((chat,index) =>( <div  key ={index}>
    
<div> 
   <strong className='autor'>{chat.role ==="user" ? "Você":"Ananda"}</strong>
   <p>{chat.content}</p>


</div>

</div>))} 
    < div className='conversafooter'><textarea value={Conversa} onChange={(e)=>setConversa(e.target.value)}></textarea>
    <button className='enviar' onClick={Ananda}>➤</button></div>
    
    
    








    </div> ) }



</div>
    </footer>




    )
    
}
export default Footer