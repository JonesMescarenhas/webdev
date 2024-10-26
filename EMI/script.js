document.getElementById('emiCalculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let loanAmount = parseFloat(document.getElementById('loanAmount').value);
    let loanTenure = parseInt(document.getElementById('loanTenure').value);
    let interestRate = parseFloat(document.getElementById('interestRate').value);
    let monthlyInterestRate = (interestRate / 100) / 12;
    let emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTenure)) / 
              (Math.pow(1 + monthlyInterestRate, loanTenure) - 1);
    
    let totalAmount = emi * loanTenure; 
    let result = document.getElementById('result');

    result.innerHTML = `Total Amount Payable: ₹${totalAmount.toFixed(2)}`;
    result.innerHTML += `<br>Monthly EMI: ₹${emi.toFixed(2)}`;
});
