import Banner from "./Components/Banner";
import BannerCard from "./Components/BannerCard";
import Card from "./Components/Card";
import Form from "./Components/Form";
import Header from "./Components/Header";
import NewCard from "./Components/NewCard";
import Polo from "../public/img/poloGTS.jpg";
import "./app.css";

function App() {
  return (
    <>
      <Header />
      <Card />
      <Banner />
      {/* Esse títuo e subtitulo será passado por PROPS lá no componente. Aparece no console.log */}
      <BannerCard titulo="Banner Principal New" subtitulo="Lorem Ipsum New" />
      <BannerCard titulo="Chicken" subtitulo="Sei lá" />
      <NewCard
        texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsam
        
            eos cum, quas ea odit quam deleniti debitis qui, neque maiores ad?
            Eligendi suscipit impedit quo. Perferendis cumque doloremque quia!"
        imagem={Polo}
        segtexto="EAIIII ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsam
            eos cum, quas ea odit quam deleniti debitis qui, neque maiores ad?
            Eligendi suscipit impedit quo. Perferendis cumque doloremque quia!"
      />
      <Form />
    </>
  );
}

export default App;
