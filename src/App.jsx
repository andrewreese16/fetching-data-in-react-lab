// src/App.jsx
import { useEffect, useState } from "react";
import { index } from "./services/starshipService";
import StarshipSearch from "./components/StarshipSearch";
import StarshipList from "./components/StarshipList";

const App = () => {
  const [starships, setStarships] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const starshipData = await index();
        setStarships(starshipData);
      } catch (err) {
        console.log("Error fetching starships: ", err);
      }
    };
    fetchStarships();
  }, []);

  const filteredStarships = starships.filter((starship) =>
    starship.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <main>
      <h1>Starship Database</h1>
      <StarshipSearch setSearchQuery={setSearchQuery} />
      <StarshipList starships={filteredStarships} />
    </main>
  );
};

export default App;
