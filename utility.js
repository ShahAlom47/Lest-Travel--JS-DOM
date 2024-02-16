function getElementTextByI(ID) {
return document.getElementById(ID)
}

// create new allemet /

function createElement(perent, value) {

    let newElement = document.createElement('p');
    let newSpan = document.createElement('span');
    let newBtn = document.createElement('button');
    newSpan.innerText = value;
    newBtn.innerText = "Cencel"

    newElement.classList.add('flex');
    newElement.classList.add('justify-between')
    newElement.classList.add('mb-3')
    newBtn.classList.add('btnn')

    newElement.appendChild(newSpan);
    newElement.appendChild(newBtn);
    
    return perent.appendChild(newElement);

}

function getTargetedCardTitle(target) {

    let targetParent = target.parentElement;
    let targetGrand = targetParent.parentElement;
    let targetChild = targetGrand.children[0];
    let childtext = targetChild.innerText;
    return childtext;
}
function getTargetedCardPrice(target) {

    let targetParent = target.parentElement;
    let targetGrand = targetParent.parentElement;
    let targetChild = targetGrand.children[1];
    let targetChildBaby = targetChild.children[0].innerText
    let targetNum = parseInt(targetChildBaby);
    return targetNum;
}


// remove item 

function removeItem (){

    
}