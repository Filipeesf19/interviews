// Simulated functions to fetch data from APIs (return Promises)
function fetchDataFromAPI1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data1: "Data from API 1" });
    }, 2000); // Simulate a 2-second delay
  });
}

function fetchDataFromAPI2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data2: "Data from API 2" });
    }, 1500); // Simulate a 1.5-second delay
  });
}

// Sequential approach (fetch data one after another)
async function fetchDataSequentially() {
  try {
    const result1 = await fetchDataFromAPI1();
    console.log("Result 1:", result1);

    const result2 = await fetchDataFromAPI2();
    console.log("Result 2:", result2);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Parallel approach (fetch data simultaneously)
async function fetchDataInParallel() {
  try {
    const [result1, result2] = await Promise.all([fetchDataFromAPI1(), fetchDataFromAPI2()]);

    console.log("Result 1:", result1);
    console.log("Result 2:", result2);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Call the functions
// Uncomment one approach at a time to test it
// fetchDataSequentially(); // Sequential approach
fetchDataInParallel(); // Parallel approach
