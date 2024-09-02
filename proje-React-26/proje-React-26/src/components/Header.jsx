import Logo from "/img/Logo.png";
import "./css/header.css";


const Header = () => {
  return (
    <>
      <div className="container-header">
        <div className="esq">
          <img className="img-header" src={Logo} alt="" />
        </div>
        <div className="text-header">
            <ul>
                <li>Início</li>
                <li>Sobre o carro</li>
                <li>Contato</li>
            </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
