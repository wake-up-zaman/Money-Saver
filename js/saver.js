function getInputValue(inputId){
    const inputField=document.getElementById(inputId);
    const inputAmountText=inputField.value;
    const amountValue=parseFloat(inputAmountText);
    return amountValue;
    
}; 
//calculate button process
document.getElementById('calculate-button').addEventListener('click',function(){

    //getting value through function
    const incomeInput=getInputValue('income-input');
    const foodAmount=getInputValue('food-input');
    const rentAmount=getInputValue('rent-input');
    const clothAmount=getInputValue('clothes-input');

    const ExpenceTotal=document.getElementById('total-expenses');
    const previousExpenceAmount= ExpenceTotal.innerText;

    //error handleing and total expences
    if(incomeInput< 0 || foodAmount<0 || rentAmount<0 || clothAmount<0 ){
        alert("Please input positive value");
    }
    if(foodAmount>0 && rentAmount>0 && clothAmount>0 ){
        const newExpenceTotal=parseFloat(previousExpenceAmount)+parseFloat(foodAmount)+parseFloat(rentAmount)+parseFloat(clothAmount);
        ExpenceTotal.innerText=newExpenceTotal;
    };

    if(incomeInput<ExpenceTotal.innerText){
        alert("Expences exceed your Income");
    }
    // error handleing and total balance
    const BalanceTotal=document.getElementById('total-balance');
    const previousBalanceAmount= BalanceTotal.innerText;
    if(incomeInput>0 ){
        const newBalanceTotal=parseFloat(previousBalanceAmount)+parseFloat(incomeInput)-parseFloat(ExpenceTotal.innerText);
        BalanceTotal.innerText=newBalanceTotal;
        console.log(BalanceTotal.innerText);
    };

    });
//saving and reamining balance
document.getElementById('save-button').addEventListener('click',function(){

    const saveInput=getInputValue('save-input');
    const incomeInput=getInputValue('income-input');
    
    const save=(incomeInput*saveInput)/100;
    const saveTotal=document.getElementById('saving-amount');
    const previousSaveTotal=saveTotal.innerText;
    //save balance
    const newSaveTotal=parseFloat(previousSaveTotal)+parseFloat(save);
    saveTotal.innerText=newSaveTotal;

    const BalanceTotal=document.getElementById('total-balance');
    const previousBalanceAmount= BalanceTotal.innerText;
    if(saveTotal.innerText> BalanceTotal.innerText){
        alert("You don't have enough money to save ")
    }
    const remainingBalace=document.getElementById('remain-balace');
    const previousRemainingBalance=remainingBalace.innerText;
    //remaining balance
    const newremainingBalace=parseFloat(previousRemainingBalance)+(parseFloat(previousBalanceAmount)-parseFloat(newSaveTotal));
    remainingBalace.innerText=newremainingBalace;
    });
    

