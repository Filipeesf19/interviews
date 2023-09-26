// Simulated function to fetch user data from an API (returns a Promise)
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === 1) {
        resolve({ id: 1, username: "john_doe" });
      } else {
        reject(new Error("User not found"));
      }
    }, 1000); // Simulate a 1-second delay
  });
}

// Asynchronous function that uses async/await to fetch user data
async function getUserInfo() {
  try {
    // Use await to wait for the Promise to resolve
    const user = await fetchUserData(1);
    console.log("User Data:", user);

    // You can perform more operations here
    // For example, fetch additional data or process the user object
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Call the asynchronous function
getUserInfo();
