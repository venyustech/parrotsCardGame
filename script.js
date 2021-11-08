function loadPage(){
    let cardsQuantity= parseInt(prompt("Qual a quantidade de pares de cartas? (2 a 7)"));
    
    if(cardsQuantity < 2 || cardsQuantity >7)
        do{
            cardsQuantity= parseInt(prompt("Bença, tu digitou errado. Se liga:\nDigite quantidade de pares de cartas. (2 a 7)"));
        }while((cardsQuantity < 2) || (cardsQuantity >7));
    
    const qtdCards = [];
    for(let i = 0; i < (2*cardsQuantity); i++)
    {
        qtdCards[i] =`<div class="card card${i+1}"data-identifier="card">
    <div class="front" data-identifier="back-face">
        <img class="logoImage" src="assets/front.png" alt="card"/>  
    </div>

` 
    } 
    for(i = 1; i <= (2*cardsQuantity); i++)
    {   
        if(i <=  cardsQuantity){
            qtdCards[i-1] +=`    <div class="verse card${i} hide" identifier="front-face">
        <img class="logoImage" src="assets/carta${i}.gif" alt="card"/>         
    </div>
</div>
` 
        }
        else if(i < 2*cardsQuantity){
            let k = i%cardsQuantity;
            qtdCards[i-1] +=`    <div class="verse card${i+1} hide" identifier="front-face">
        <img class="logoImage" src="assets/carta${k}.gif" alt="card"/>   
             
    </div>
</div>
`       
        }
        else if( i == 2*cardsQuantity){
            qtdCards[i-1] +=`    <div class="verse card${i+1} hide" identifier="front-face">
            <img class="logoImage" src="assets/carta${cardsQuantity}.gif    " alt="card"/>   
                 
        </div>
    </div>
`   
        }

    }

    const totalCards = [];
    totalCards[0]= "`";
   
  
    for(i = 0; i < (2*cardsQuantity); i++)
    {
        totalCards[0] += qtdCards[i];
    } 
    totalCards[0] +="`";
    
    console.log(totalCards[0]);

    let loadCards = document.querySelector(".card-wrapper");

    loadCards.innerHTML = totalCards[0];
}
loadPage();