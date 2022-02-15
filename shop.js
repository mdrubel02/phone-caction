console.log('connenting');

function phoneUpdate(isFrofit){
    const caseInput=document.getElementById('mobile-input');
    let caseInputText=caseInput.value ;
    // console.log(caseInputText);
    if(isFrofit ){
        caseInputText=parseInt(caseInputText) + 1;
    }
    else if(caseInputText > 0){
        caseInputText=parseInt(caseInputText) - 1;
    }
    caseInput.value=caseInputText;
     const mobileTotal= document.getElementById('mobile-price');
     mobileTotal.innerText=caseInputText * 1219;
     totalCalculate();
}



document.getElementById('incrice-btn').addEventListener('click', function(){
    phoneUpdate(true);
    // const phonePrice=document.getElementById('mobile-price').innerText * caseInputText; 
    // console.log(phonePrice);
})
document.getElementById('discriment-btn').addEventListener('click', function(){

    phoneUpdate(false);
    // const caseInput=document.getElementById('mobile-input');
    // let caseInputText=caseInput.value ;
    // console.log(caseInputText);
    
    // const phonePrice=document.getElementById('mobile-price').innerText * caseInputText; 
    // console.log(phonePrice);
})


function caseUpdate(isIncris){
    const caseInput=document.getElementById('case-fild');
    let caseInputText=caseInput.value ;
    // console.log(caseInputText);
    if(isIncris ){
        caseInputText=parseInt(caseInputText) + 1;
    }
    else if(caseInputText > 0){
        caseInputText=parseInt(caseInputText) - 1;
    }
    caseInput.value=caseInputText;
     const caseTotal= document.getElementById('case-price');
     caseTotal.innerText=caseInputText * 59;
     totalCalculate();
}

document.getElementById('case-plus-product').addEventListener('click', function(){
    caseUpdate(true);
})
document.getElementById('case-minus-product').addEventListener('click', function(){
    caseUpdate(false);
})

function phoneGetInput(){
    const phonePrice=document.getElementById('mobile-input');
    const phoneNumber=parseInt( phonePrice.value);
    return phoneNumber;
}
function caseGetInput(){
    const casePrice=document.getElementById('case-fild');
    const caseNumber=parseInt( casePrice.value);
    console.log(caseNumber);
    return caseNumber;
}

function totalCalculate(){
    const phoneTotal=phoneGetInput() * 1219;
    const caseTotal= caseGetInput() * 59;
    const subTotal=phoneTotal + caseTotal;
    const tax=subTotal * .1;
    const finalTotal=subTotal + tax;
    // console.log(subTotal);


    document.getElementById('total').innerText=subTotal;
    document.getElementById('tax').innerText=tax;
    document.getElementById('final-amonut').innerText=finalTotal;
}