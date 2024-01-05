// Real world example
const API_URL = 'https://api.github.com/users/SaketKothari';

async function handlePromise() {
  try {
    const data = await fetch(API_URL);
    const jsonVal = await data.json();
    console.log(jsonVal);
  } catch (error) {
    console.log(error);
  }
}

handlePromise();

// Error handling traditional method
// handlePromise().catch((err) => console.log(err));
