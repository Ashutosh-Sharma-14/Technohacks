// changes the full form of the option to their abbreviation for better experience
let previousOptionText = '';

function updateOption(selectElement) {
  const selectedOption = selectElement.options[selectElement.selectedIndex];
  
  // Revert previous changes if another option is selected
  if (previousOptionText !== '') {
    const previousOption = selectElement.querySelector(`option[value="${previousOptionValue}"]`);
    previousOption.text = previousOptionText;
  }
  
  // Save the previous option text
  previousOptionText = selectedOption.text;
  previousOptionValue = selectedOption.value;
  
  // Change the displayed option text to abbreviation
  selectedOption.text = selectedOption.id;
}

// on button click convert the values
document.addEventListener("DOMContentLoaded", function () {
  const convertButton = document.querySelector(".convert-button");
  convertButton.addEventListener("click", convertCurrency);
});

function convertCurrency() {
  const amount1 = document.getElementById("amount1").value;
  const currency1 = document.getElementById("currencySelect1").value;
  const currency2 = document.getElementById("currencySelect2").value;
  const amount2Element = document.getElementById("amount2");
  const exchangeRate = document.getElementById("exchange-rate-text");

  // Perform currency conversion API call here
  // Replace "YOUR_API_KEY" with your actual API key
  const apiEndpoint = `https://v6.exchangerate-api.com/v6/c272ab0ebda9f0b815e30ec9/pair/${currency1}/${currency2}`;

  fetch(apiEndpoint)
    .then(response => response.json())
    .then(data => {
      const rate = data.conversion_rate;
      const convertedAmount = amount1*rate;
      amount2Element.value = convertedAmount.toFixed(4);
      exchangeRate.textContent = `1 ${currency1} = ${rate} ${currency2}`;
    })
    .catch(error => {
      console.log("Error:", error);
      amount2Element.value = "";
    });
}

