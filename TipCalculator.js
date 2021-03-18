window.onload = function() {
  const billAmountInput = document.getElementById('cost');
  const tipPercentageInput = document.getElementById('tip-percentage');
  const partySizeInput = document.getElementById('party-total');

  function calc_tip() {
    let totalBillAmount = Number(billAmountInput.value);
    let totalTipPercentage = Number(tipPercentageInput.value) / 100;
    let partySize = Number(partySizeInput.value);

    let tip = (totalBillAmount * totalTipPercentage) / partySize;

    let tip_el = document.querySelector('#tip-amount');
    tip_el.innerText = '$' + Math.round(tip*100)/100 + ((partySize > 1) ? ' each' : '');
    return tip;
  }

  function calc_split() {
    let totalBillAmount = Number(billAmountInput.value);
    let partySize = Number(partySizeInput.value);
    let tip = calc_tip();

    let split = (totalBillAmount / partySize) + tip;

    let split_el = document.querySelector('#split-amount');
    split_el.innerText = '$' + Math.round(split*100)/100 + ((partySize > 1) ? ' each' : '');
  }

  document.getElementById("calc-btn").addEventListener("click", calc_tip);
  document.getElementById("calc-btn").addEventListener("click", calc_split);

};
