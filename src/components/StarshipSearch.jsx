import { useState } from "react";

const StarshipSearch = ({ setSearchQuery }) => {
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    setInput(e.target.value);
    setSearchQuery(e.target.value);
  };

  return (
    <main>
      <section>
        <form>
          <input
            type="text"
            value={input}
            onChange={handleSearch}
            placeholder="Search for a starship..."
          />
        </form>
      </section>
    </main>
  );
};

export default StarshipSearch;
