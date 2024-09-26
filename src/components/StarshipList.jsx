import StarshipCard from "./StarshipCard";

const StarshipList = ({ starships }) => {
  return (
    <section>
      {starships.map((starship) => (
        <StarshipCard key={starship.name} starship={starship} />
      ))}
    </section>
  );
};

export default StarshipList;
