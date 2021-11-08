function loadPage(){
    let cardsQuantity= parseInt(prompt("Qual a quantidade de pares de cartas? (2 a 7)"));
    
    if(cardsQuantity < 2 || cardsQuantity >7)
        do{
            cardsQuantity= parseInt(prompt("Bença, tu digitou errado. Presta atenção, se liga:\nDigite quantidade de pares de cartas. (2 a 7)"));
        }while((cardsQuantity < 2) || (cardsQuantity >7));

    const qtdCards = [];
    qtdCards[0]= "`";
    console.log(qtdCards[0]);
  
    for(i = 0; i < (2*cardsQuantity); i++)
    {
        qtdCards[0] +=`<div class="card card${i+1}">
    <img class="logoImage" src="assets/front.png" alt="card"/>
</div>
` 
    } 
    qtdCards[0] +="`";

    console.log(qtdCards[0]);

    let loadCards = document.querySelector(".card-wrapper");

    loadCards.innerHTML = qtdCards[0];
}
loadPage();