document.addEventListener("DOMContentLoaded", function () {
  const decrementButton = document.getElementById("decrement");
  const incrementButton = document.getElementById("increment");
  const clearButton = document.getElementById("clear");
  const countDisplay = document.getElementById("count");
  const errorMessage = document.getElementById("error-message");

  let count = 0;

  // Function to increment count
  incrementButton.addEventListener("click", function () {
    count++;
    countDisplay.innerText = count;
    clearButton.style.display = "block"; // Show clear button
    errorMessage.style.display = "none"; // Hide error message
  });

  // Function to decrement count
  decrementButton.addEventListener("click", function () {
    if (count > 0) {
      count--;
      countDisplay.innerText = count;
      if (count === 0) {
        clearButton.style.display = "none"; // Hide clear button
      }
    } else {
      errorMessage.style.display = "block"; // Show error message
    }
  });

  // Function to clear count
  clearButton.addEventListener("click", function () {
    count = 0;
    countDisplay.innerText = count;
    clearButton.style.display = "none"; // Hide clear button
    errorMessage.style.display = "none"; // Hide error message
  });
});
