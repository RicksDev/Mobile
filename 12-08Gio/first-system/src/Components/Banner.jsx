import "./banner.css";
import imagem from "../../public/img/Jetta.jpg";
const Banner = () => {
  return (
    <>
        {/* <div className="titulo">
            Jetta GLI
        </div> */}
    <div className="container">
      <div className="container-img">
        <img className="imgPrincipal" src={imagem} alt="" />
      </div>
      <div className="container-txt">
        O Volkswagen Jetta GLi é um sedã que combina estilo esportivo e
        praticidade, destacando-se na linha da Volkswagen por seu desempenho e
        sofisticação. O Jetta GLi é frequentemente descrito como a versão mais
        esportiva do Jetta, oferecendo uma experiência de condução envolvente e
        dinâmica. Equipado com um motor turboa limentado de 2.0 litros, o GLi
        entrega uma potência considerável, que se traduz em uma aceleração
        rápida e uma resposta ágil. A transmissão automática de dupla embreagem
        de 7 marchas, conhecida como DSG, contribui para uma troca de marchas
        suave e eficiente, o que faz com que a condução seja tanto emocionante
        quanto confortável.
        <a href="https://www.vw.com.br/pt/carros/Jetta.html">
          <button className="btn" alt="Redirecionamento para o site da Volks">
            Saiba Mais!
          </button>
        </a>
      </div>
    </div>
    </>
  );
};

export default Banner;
