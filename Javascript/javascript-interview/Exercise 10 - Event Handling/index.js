// Simulated function to fetch data from an API
function fetchDataFromAPI() {
  // Simulate an API call with a delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomValue = Math.random();
      if (randomValue < 0.7) {
        // Simulate a successful response
        resolve({ data: "Successfully fetched data from the API" });
      } else {
        // Simulate an error response
        reject(new Error("Failed to fetch data from the API"));
      }
    }, 1000); // Simulate a 1-second delay
  });
}

// Using the Promise to fetch data
fetchDataFromAPI()
  .then((response) => {
    console.log("Success:", response.data);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
