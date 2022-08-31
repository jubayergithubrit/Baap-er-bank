//step-1: add event listener to deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    //step-2: get the amount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    //step-3:get the current deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    previousDepositTotal = parseFloat(previousDepositTotalString);
    // step-4 add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // step-5 set the diposit total
    depositTotalElement.innerText = currentDepositTotal;

    //step-6:addd to the total balance
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalElementString = balanceTotalElement.innerText;
    const previousBalanceTotalElement = parseFloat(previousBalanceTotalElementString);
    //step-7:calculate current total balance
    const currentTotalBalance = previousBalanceTotalElement + newDepositAmount;
    //step-8: set the balance total
    balanceTotalElement.innerText = currentTotalBalance;
    //step-9: clear inputfield
    depositField.value = '';
})