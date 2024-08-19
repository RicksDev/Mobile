import "./bannerCard.css";

const BannerCard = ({ titulo, subtitulo }) => {
  //Esse título e subtítulo vem la do App.jsx que passamos junto ao componente BannerCard

  return (
    <>
      <div className="banner">
        {/* Esses props vem lá do App que passamos os parâmetros */}
        <h1>{titulo}</h1>
        <h2>{subtitulo}</h2>
      </div>
    </>
  );
};

export default BannerCard;
