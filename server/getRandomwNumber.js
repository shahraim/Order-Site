function generateRandomNumericValue() {
  const min = 1000; // Minimum value (inclusive)
  const max = 9999; // Maximum value (inclusive)
  const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomValue.toString();
}

module.exports = { generateRandomNumericValue };

// Call the function to get a random numeric value of length 4
// const randomNumericValue = generateRandomNumericValue();
// console.log(randomNumericValue);
