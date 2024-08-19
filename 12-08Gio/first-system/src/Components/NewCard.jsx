import "./newCard.css";
import Polo from "../../public/img/poloGTS.jpg";

const NewCard = ({ texto, imagem, segtexto }) => {
  return (
    <>
      <div className="new-container">
        <div className="teste">
          <div className="card-txt">
            {texto}
          </div>
          <div className="img-content">
            <img src={Polo} alt="" />
          </div>
          <div className="card-txt">
            {segtexto}
          </div>
          <button className="btn-new">Tenho Interesse!</button>
        </div>
      </div>
    </>
  );
};

export default NewCard;
