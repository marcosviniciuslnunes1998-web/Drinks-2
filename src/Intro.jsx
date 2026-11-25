import { useState } from 'react'
import './App.css'









 
function Intro () {
    
    
 

    
    let drink =[
    

    {id:1, nome:"Mojito" , img:"intro1.png",ing:"Rum,hortelã,açucar,gelo e água com gás", desc:"Coloque 10 folhas de hortelã em um copo longo , acrescente o açucar o rum e massere de leve para soltar o extrato do hortelã , acrescente o gelo e a água com gás, mexa suavemente com uma bailarina e decore com folhas de hortelã",descpeq:"Clássico refrescante com rum,limão e hortelã",categoria:"Tropicais"},
    {id:2,nome:"Caipirinha",img:"intro2.png", ing:"Limão Tahiti,açucar,cachaça e gelo",desc:"Corte um limão tahiti em 8 partes iguais, em uma coqueteleira acrescente o limão e o açucar e massere suavemente para extrair o suco do limão sem esmagar muito a casca, depois de masserado acrescente o gelo, e a cachaça (50 ml),bata vigorosamente, agora so servir , decore com uma faria de limão na borda,",descpeq:"O clássico brasileiro que conquistou o mundo",categoria:"Tropicais"},
    {id:3,nome:"Piña Colada",img:"intro3.png",ing:"Abacaxi,rum branco,leite de coco e açucar",desc:"Em um liquidificador acrescente o abacaxi,o rum ,o açucar e o leite de coco,deixe bater bem para misturar com eficiencia os ingredientes , depois so servir em um copo especial",descpeq:"Doce,cremosa e com sabor das praias tropicais",categoria:"Tropicais"},
    {id:4,nome:"Negroni",img:"intro4.png",ing:"Gin,Vermuth Rosso e Campari",desc:"Em um copo baixo pré resfriado acrescente gelo até o topo , ou uma pedra personalizada , acrescente 30 ml de cada bebida , mexe suavemente por cerca de 30 segundos , decore com um zets de laranja",descpeq:"Sofisticado e Equilibrado : Gin, vermuth e Bitter",categoria:"Classico"},
    {id:5,nome:"Whisky Sour",img:"intro5.png",ing:"Whisky ,açucar,suco de limão, e clara de ovo",desc:"Em uma coqueteira adicione todos os ingredientes , preencha com gelo e bata vigorosamente, passe o liquido para a coqueteleira vazia e despense o gelo , bata novamente sem o gelo ,vigorosamente,(Dry shake),sirva com acuçar na borda do copo",descpeq:"Equilibrio perfeito entre o azedo e o doce",categoria:"Classico"},
    {id:6,nome:"Gin Tônica",img:"intro6.png",ing:"Gin , Tônica e gelo",desc:"Em uma taça , ou copo acrescente todos os ingredientes,mexa suavemente para a tônica nao perder o gás , decore com limão siciliano e alecrim (Clássico)",descpeq:"Simples,elegante e sempre atual",categoria:"Classico"},
    {id:7,nome:"Moscow Mule",img:"intro7.png",ing:"Vodka,suco de limão ,refrigerante de gengibre, açucar e gelo",desc:"Em um copo de cobre , adicione a Vodka o suco de limão,gelo e o açucar , mexe suavemente para mistutar os ingredientes,para finalizar acrescente o refrigerante de gengibre e mexa bem suavemente para nao perder o gás",descpeq:"Refrescante e Marcante com gengibre",categoria:"Classico"},
    {id:8,nome:"Virgin Mojito",img:"intro8.png",ing:"Suco de limão, hortelã ,Refrigerante de limão e gelo",desc:"Em um copo longo acrescente o suco de limão a hortelã , massere com suavidade só para extrair o extrato do hortelã, depois acrescente o gelo e o refri de limão e mexe suavemente , decore com folhas de hortelã " ,descpeq:"Todo o sabor do Mojito sem álcool",categoria:"Semalcool"},
{id:9 ,nome:"Cosmopolitan" ,img:"intro9.png",descpeq:"Um excelente drink a base de limão e cramberry",ing:"Suco de limão , vodka ,licor de laranja e suco de cramberry",desc:"Coloque gelo na taça e deixe no aguardo , em uma coqueteleira coloque os ingredientes, complete-a com gelo e mexa suavemente com uma bailarina, retire o gelo da taça e sirva o drink, decore com uma fatia de limão",categoria:"Classico" },
         {id:10 ,nome:"Manhattam",img:"intro10.png",descpeq:"Um Drink clássico a base whisky e vermuth rosso",ing:"Whisky,Vermuth rosso e Bitter",desc:"Coloque gelo em uma taça e reserve,em um mix glass, adicione o bitter , o whisky e o Vermuth, preencha com gelo e mexa por cerca de 40 segundos, descarte o gelo da taça e coe  o drink para tal, adicione uma cereja",categoria:"Classico"},
         {id:11 ,nome:"Sex on The Beach",img:"intro11.png",descpeq:"Um drink clássico a base de vodka e suco de laranja",ing:"Vodka, suco de laranja,licor de pessego,licor de frutas vermelhas",desc:"Prencha um copo alto de gelo, acrescente a vodka o suco de laranja e o licor de pessêgo, mexe com uma bailarna por 30 segundos para misturar, logo apos acrescente o licor de frutas vermelhas pelo lado do copo para que ele chega ao final do copo fazendo assim um degrade , decore com meia fatia de laranja",categoria:"Tropicais"},
         {id:12, nome:"Dry Martini",img:"intro12.png",descpeq:"Um drink forte com suas especialidades",ing:"Gin , Vermuth Dry e azeitona",desc:"Coloque gelo em uma taça Dry e reserve, em um mix glass , adicione o gin e o vermuth, prencha de gelo, mexa com um bailarina por cerca de 40 segundos, despence o gelo da taça e coe o drink para tal , em um palito adicione 3 azeitonas , um antes de tomar o drink , outra para a metade do drink e outra para o final",categoria:"Classico"},
         {id:13, nome:"Margarita",img:"intro13.png",descpeq:"Classico Mexicano a base de tequila e licor de laranja",ing:"Tequila , licor de laranja e suco de limão",desc:"Pegue uma taça de margarita , e passe uma fatia de limão por metade da borda, encoste no sal afim de que o sal grude na borda , em uma coqueteleira acresecente todos os ingredientes , e complete com gelo , bata vigorosamente até que crie gelo na coqueleira , coe pra a taça ,sirva-se ",categoria:"Classico"},
         {id:14 ,nome:"Aperol Spritz",img:"intro14.png",descpeq:"Delicioso drink , a base de Aperol e espumante",ing:"Espumante e aperol",desc:"Em uma taça de vinho,acrescente gelo até encher, adicione o aperol e o espumante devagar,após completar o copo com o espumante ,decore com uma fatia de laranja",categoria:"Classico"},
         {id:15 ,nome:"Old Fashion",img:"intro15.png",descpeq:"Clássico americano a base de whisky, açucar e bitter",ing:"Bitter , whisky,açucar e água com gás",desc:"Em um copo baixo , acrescente o açucar e 2 dashes de bitter, massere,acrescente o whisky e mexa suavemente ,para finalizar acrescente a água com gás e decore com fatias de laranja",categoria:"Classico"},
         {id:16 ,nome:"Bloodmary",img:"intro16.png",descpeq:"Drink salgado, a base de vodka , suco de tomate...",ing:"Sal , molho inglês , suco de limão,suco de tomate ,vodka ,pimenta e aipo para decorar",desc:"Em uma coquetelira acrescente todos os ingredientes coloque gelo e bata vigorosamente afim de airar o drink , em um copo alto acrescente o gelo e coe o drink ,decore com aipo",categoria:"Classico"},

];
const [modalIntro,setmodalIntro]= useState(false)
const [itemselecionado,setitemselecionado]=useState(null)
const drinks = drink.find(item =>item.id === itemselecionado)
const [categoria,setcategoria]=useState("todos")
const DrinksFiltrados = categoria ==="todos"
? drink
:drink.filter(item => item.categoria === categoria)

return (
 
    <section id='catalogo'>
        <div  className='introfundo'>
        <p className='p2'> Catalogo</p>
        <div className='Intro1'>
     
    <div> <h2 className='h2-2'>Catalogo de Drinks</h2></div>
     <div className='card1'>
    
        <button className='botao2' onClick={() => setcategoria ("todos")}>Todos</button>
        <button className='botao2' onClick={() => setcategoria ("Classico")}>Clássicos</button>
        <button className='botao2' onClick={()=> setcategoria ("Tropicais")}>Tropicais</button>
        <button className='botao2' onClick={() => setcategoria ("Semalcool")}>Sem Álcool</button>
        
     </div>
    </div>
     <div className='drinks'>
     <div className='introcard'>
     {DrinksFiltrados.map(drinks =>(<div className='introcard1'key={drinks.id}><img src={drinks.img} alt="intro1" width={180} height={130}></img>
     <h4>{drinks.nome}</h4>
     <p className='p-2'>{drinks.descpeq}</p>
     <button className='vermais'onClick={() => {setmodalIntro(true);setitemselecionado(drinks.id)}}>Ver mais</button>
     </div>))}
     </div>
               
        
        
   
  
        
         
        
        
       
        {modalIntro && ( <div className='modalintro'>
            <div key={drinks.id} >
                <h4 className='h4-4'>{drinks.nome}</h4>
                <img src={drinks.img} width={218}></img>
                <h4>Ingredientes</h4>
                <p className='p-3'>{drinks.ing}</p>
                <h4>Modo de Preparo</h4>
                <p className='p-3'>{drinks.desc}</p>
                <button className='fecharmodal1' onClick={()=>setmodalIntro(false)}>Fechar</button>

            </div>
        </div>)}
     
 





    </div>








</div>




    </section>
 






)


}

export default Intro