let cardsQuantity= parseInt(prompt("Qual a quantidade de pares de cartas? (2 a 7)"));
function loadPage(){
    
    if(cardsQuantity < 2 || cardsQuantity >7)
        do{
            cardsQuantity= parseInt(prompt("Bença, tu digitou errado. Se liga:\nDigite quantidade de pares de cartas. (2 a 7)"));
        }while((cardsQuantity < 2) || (cardsQuantity >7));
    
    const qtdCards = [];
    for(let i = 0; i < (2*cardsQuantity); i++)
    {
        qtdCards[i] =`<div class="card card${i+1}" onclick="showCard(this)" data-identifier="card">
<div class="front-face face" data-identifier="front-face">
<img class="logoImage" src="assets/front.png" alt="card"/>  
</div>

` 
    } 
    for(i = 1; i <= (2*cardsQuantity); i++)
    {   
        if(i <=  cardsQuantity){
            qtdCards[i-1] +=`<div class="back-face face hide" data-identifier="back-face">
<img class="logo-back" src="assets/carta${i}.gif" alt="card"/>         
</div>
</div>
` 
        }
        else if(i < 2*cardsQuantity){
            let k = i%cardsQuantity;
            qtdCards[i-1] +=`<div class="back-face face hide" data-identifier="back-face">
<img class="logo-back" src="assets/carta${k}.gif" alt="card"/>         
</div>
</div>
`  
        }
        else if( i == 2*cardsQuantity){
            qtdCards[i-1] +=`<div class="back-face face hide" data-identifier="back-face">
<img class="logo-back" src="assets/carta${cardsQuantity}.gif" alt="card"/>         
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
    


    let loadCards = document.querySelector(".card-wrapper");

    loadCards.innerHTML = totalCards[0];
}
loadPage();

let totalOfSeletions = 0;
let doubleShot = [];

function showCard(bottom){

    let selectedBottom = document.querySelector("bottom .selected" );
    if(selectedBottom == null && ((totalOfSeletions == 0 ) || (totalOfSeletions==1)) )
    {
        bottom.classList.add("selected");
        totalOfSeletions++;
        doubleShot.push(bottom);
        let back = bottom.querySelector(".back-face");
        let front = bottom.querySelector(".front-face");
        if( front.classList.contains("done"))
            return;

        back.classList.remove("hide");
        back.classList.add("selected");
        
        front.classList.add("hide");
        front.classList.add("selected");     
    }
    if(totalOfSeletions == 2){
        verifyCompatibility(bottom);
    }
}

function verifyCompatibility(bottom){

    if(doubleShot[0].querySelector(".back-face").innerHTML === doubleShot[1].querySelector(".back-face").innerHTML){
        for(i=0; i<2;i++)
        {   
            
            let back = doubleShot[i].querySelector(".back-face");
            let front = doubleShot[i].querySelector(".front-face");
            back.classList.add("done");
            back.classList.remove("selected");
            front.classList.add("done");
            front.classList.remove("selected");
            console.log(back)
            console.log(front)

            totalOfSeletions = 0;
            doubleShot = [];
            alert("deu match");
            
        }
    }
    else{
        for(i=0; i<2;i++)
        { 
            let back = doubleShot[i].querySelector(".back-face");
            let front =  doubleShot[i].querySelector(".front-face");
            back.classList.add("hide");
            back.classList.remove("selected");
            front.classList.remove("hide");
            front.classList.remove("selected");

            totalOfSeletions = 0;
            alert("na proxima");
        }
    }

}