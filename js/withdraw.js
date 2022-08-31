// step1: add event handler
document.getElementById('btn-withdraw').addEventListener('click', function () {
    //step1
    const withdrawField = document.getElementById('withdraw-field');
    // step2
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    //    step3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    console.log(previousWithdrawTotal);

    //step5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalElementString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalElementString);

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Unsufficient Balance');
        return;
    }
    // step4
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;
    //step6
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    //step7
    balanceTotalElement.innerText = newBalanceTotal;


    //step-8:withdraw field clear
    withdrawField.value = '';
})