        document.getElementById('calculate-button').addEventListener('click',function(){
        //get the food amount 
        const foodInput=document.getElementById('food-input');
        const newFoodAmount=foodInput.value;

        //get the rent amount 
        const rentInput=document.getElementById('rent-input');
        const newRentAmount=rentInput.value;

        //get the cloth amount 
        const clothInput=document.getElementById('clothes-input');
        const newclothAmount=clothInput.value;

        // update expences total
        const ExpenceTotal=document.getElementById('total-expenses');
        const previousExpenceAmount= ExpenceTotal.innerText;
        const newExpenceTotal=parseFloat(previousExpenceAmount)+parseFloat(newFoodAmount)+parseFloat(newRentAmount)+parseFloat(newclothAmount);
        ExpenceTotal.innerText=newExpenceTotal;
        // foodInput.value='';
        // rentInput.value='';
        // clothInput.value='';
        
        //get income
        const incomeInput=document.getElementById('income-input');
        const newIncomeAmount=incomeInput.value; 
        
        //update remain balance
        const BalanceTotal=document.getElementById('total-balance');
        const previousBalanceAmount= BalanceTotal.innerText;
        const newBalanceTotal=parseFloat(previousBalanceAmount)+parseFloat(newIncomeAmount)-parseFloat(newExpenceTotal);
        BalanceTotal.innerText=newBalanceTotal;


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
    

