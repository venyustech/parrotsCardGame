function loadPage(){
    const cardsQuantity= parseInt(prompt("Qual a quantidade de pares de cartas? (1 a 7)"));

    const qtdCards = [];
    qtdCards[0]= "`";
    console.log(qtdCards[0]);
  
    for(i = 0; i < cardsQuantity; i++){
        qtdCards[0] +=`<div class="card">
    <img class="logoImage" src="assets/front.png" alt="card"/>
</div>
`  
        qtdCards[0] +=`<div class="card">
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