function loadPage(){
    let cardsQuantity= parseInt(prompt("Qual a quantidade de pares de cartas? (2 a 7)"));
    
    if(cardsQuantity < 2 || cardsQuantity >7)
        do{
            cardsQuantity= parseInt(prompt("Bença, tu digitou errado. Se liga:\nDigite quantidade de pares de cartas. (2 a 7)"));
        }while((cardsQuantity < 2) || (cardsQuantity >7));

    const qtdCards = [];
    qtdCards[0]= "`";
   
  
    for(i = 0; i < (2*cardsQuantity); i++)
    {
        qtdCards[0] +=`<div class="card card${i+1}"data-identifier="card">
    <div class="front" data-identifier="back-face">
        <img class="logoImage" src="assets/front.png" alt="card"/>  
    </div>
    <div class="verse card${i+1} hide" identifier="front-face">            
    </div>
</div>
` 
    } 
    qtdCards[0] +="`";

    console.log(qtdCards[0]);

    let loadCards = document.querySelector(".card-wrapper");

    loadCards.innerHTML = qtdCards[0];
}
loadPage();