function getInputValue(inputId){
    const inputField=document.getElementById(inputId);
    const inputAmountText=inputField.value;
    const amountValue=parseFloat(inputAmountText);
    return amountValue;
}; 

document.getElementById('calculate-button').addEventListener('click',function(){

    const incomeInput=getInputValue('income-input');
    const foodAmount=getInputValue('food-input');
    const rentAmount=getInputValue('rent-input');
    const clothAmount=getInputValue('clothes-input');

    const ExpenceTotal=document.getElementById('total-expenses');
    const previousExpenceAmount= ExpenceTotal.innerText;
    if(foodAmount>0 && rentAmount>0 && clothAmount>0 ){
        const newExpenceTotal=parseFloat(previousExpenceAmount)+parseFloat(foodAmount)+parseFloat(rentAmount)+parseFloat(clothAmount);
        ExpenceTotal.innerText=newExpenceTotal;
    };

    const BalanceTotal=document.getElementById('total-balance');
    const previousBalanceAmount= BalanceTotal.innerText;
    if(incomeInput>0 ){
        const newBalanceTotal=parseFloat(previousBalanceAmount)+parseFloat(incomeInput)-parseFloat(ExpenceTotal.innerText);
        BalanceTotal.innerText=newBalanceTotal;
    };

    });

document.getElementById('save-button').addEventListener('click',function(){

    const saveInput=document.getElementById('save-input');
    const newSaveAmount=saveInput.value;

    const incomeInput=document.getElementById('income-input');
    const newIncomeAmount=incomeInput.value; 
     const save=(newIncomeAmount*newSaveAmount)/100;
    const saveTotal=document.getElementById('saving-amount');
    const previousSaveTotal=saveTotal.innerText;
    const newSaveTotal=parseFloat(previousSaveTotal)+parseFloat(save);
    saveTotal.innerText=newSaveTotal;

    const BalanceTotal=document.getElementById('total-balance');
    const previousBalanceAmount= BalanceTotal.innerText;
    const remainingBalace=document.getElementById('remain-balace');
    const previousRemainingBalance=remainingBalace.innerText;
    const newremainingBalace=parseFloat(previousRemainingBalance)+(parseFloat(previousBalanceAmount)-parseFloat(newSaveTotal));
    remainingBalace.innerText=newremainingBalace;
    });
    

