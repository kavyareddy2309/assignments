document.addEventListener('DOMContentLoaded', function () {
    const textInput = document.getElementById('textInput');
    const charCountSpan = document.getElementById('charCount');
    const countButton = document.getElementById('countButton');

    
    function updateCharacterCount() {
        const text = textInput.value;
        charCountSpan.textContent = text.length;
    }

   
    function handleCountButtonClick() {
        updateCharacterCount();
    }

   
    textInput.addEventListener('input', updateCharacterCount);

    
    countButton.addEventListener('click', handleCountButtonClick);
});
