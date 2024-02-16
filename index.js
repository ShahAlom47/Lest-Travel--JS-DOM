
let total = 0;
let grandTotal = total;

const cardBtnS = document.querySelectorAll("#card-container button")
for (let cardBtn of cardBtnS) {
    cardBtn.addEventListener("click", function (e) {
        let targetBtn = e.target
        let cardTitle = getTargetedCardTitle(targetBtn);
        let cardPrice = getTargetedCardPrice(targetBtn);
        let cardStore = getElementTextByI("card-store");
        let cardDataIs = cardTitle + "   $ " + cardPrice;
        
        createElement(cardStore, cardDataIs)
        total = total + cardPrice

        
        totalDisplayUpdaate(total)

    })




}


function totalDisplayUpdaate(value) {

    let totalContainer = getElementTextByI("total-cost-value")
    let totalValue = totalContainer.innerText = value;
    let valu = grandTotal = totalValue;
    grandTotalDisUpdate(valu);

}

function grandTotalDisUpdate(valu) {
    let grandTotalDis = getElementTextByI('grand-total-value');


    const transportBtnS = document.querySelectorAll(".cost-btn-container button");
    for (let button of transportBtnS) {
        button.addEventListener('click', function (e) {
            const targetBtn = e.target

            let btnSpan = targetBtn.children[0]
            let train = btnSpan.className.includes('train')

            if (train == true) {
                let btnValu = parseInt(btnSpan.innerText)
                grandTotalDis.innerText = valu - btnValu;
            }

            else {
                let btnValu = parseInt(btnSpan.innerText)
                grandTotalDis.innerText = valu + btnValu;
            }
        })
    }
    grandTotalDis.innerText = valu
}



let cardListBtn = document.querySelector("#card-store");

cardListBtn.addEventListener("click",function(e){

    let target = e.target

    let targetText= target.previousSibling.innerHTML.split(' ');
   let targetValue= parseInt(targetText[targetText.length-1] )
    console.log(targetValue);

    let totalContainer = getElementTextByI("total-cost-value")
    let totalValue = totalContainer.innerText 
   
    let newValue= total-targetValue
    totalDisplayUpdaate(newValue)
    console.log(newValue); 

    let targetParent=target.parentElement;
    let grandparent = targetParent.parentNode
    grandparent.removeChild(targetParent);





})

