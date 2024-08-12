import "./card.css";
const Card = () => {
  const cardData = [
    {
      titulo: "Card 1",
      description: "Este é o primeiro card.",
      link: "#",
    },
    {
      titulo: "Card 2",
      description: "Este é o segundo card.",
      link: "#",
    },
    {
        titulo: "Card 3",
        description: "Este é o terceiro card.",
        link: "#",
      },
      {
        titulo: "Card 4",
        description: "Este é o quarto card.",
        link: "#",
      },
  ];

  console.log(cardData);

  //utilizar map para percorrer um array. Parecido com o For, vai copiar as informações

  return (
    <div className="card-container">
      {/* card = itens q vai pra tela e index = posição */}
      {cardData.map((card, index) => (
        //Se não passar essa key=index fica dando um erro no console.
        <div className="card" key={index}>
          <h2>{card.titulo}</h2>
          <p>{card.description}</p>
          <a href={card.link}>Veja Mais!</a>
        </div>
      ))};
    </div>
  );
};
export default Card;
