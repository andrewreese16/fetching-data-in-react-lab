const BASE_URL = "https://swapi.dev/api/starships/";

export const index = async () => {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data.results;
  } catch (err) {
    console.log(err, "<-- err in fetch");
  }
};
