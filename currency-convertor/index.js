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
  selectedOption.text = selectedOption.value;
}

