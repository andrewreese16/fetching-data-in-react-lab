const StarshipCard = ({ starship }) => {
  return (
    <main>
      <section>
        <h2>{starship.name}</h2>
        <p>Model: {starship.model}</p>
        <p>Manufacturer: {starship.manufacturer}</p>
        <p> Cost: {starship.cost_in_credits} credits</p>
      </section>
    </main>
  );
};

export default StarshipCard;
