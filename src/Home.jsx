import style from "./styles/Home.module.css";
import linkedin from "./assets/SociaIcon/linkedin.png";
import gmail from "./assets/SociaIcon/correo-electronico.png";
import twitter from "./assets/SociaIcon/gorjeo.png";
import whatsapp from "./assets/SociaIcon/whatsapp.png";
import computer from "./assets/computer.jpg";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Info />
    </div>
  );
};
const NavBar = () => {
  return (
    <div className={style.NavBar}>
      <h1 className={style.title}>Nolger Rodriguez</h1>
      <div>
        <img src={linkedin} className={style.socialIcon} alt="" />
        <img src={gmail} className={style.socialIcon} alt="" />
        <img src={twitter} className={style.socialIcon} alt="" />
        <img src={whatsapp} className={style.socialIcon} alt="" />
      </div>
    </div>
  );
};
const Info = () => {
  return (
    <div className={style.infoCont}>
      <div className={style.infoIzqCont}>
        <div className={style.infoLeyendaCont}>
          <h1 className={style.infoMeet}>Nice to meet you!</h1>
          <h1 className={style.infoIm}>
            I'm, <strong className={style.name}>Nolger Rodriguez</strong>
          </h1>
          <h3 className={style.infoLeyenda}>
            Based in the colombia, I'm a front-end developer passionate about
            building acceddible web apps that users love.
          </h3>
        </div>
        <button className={style.btnContactMe}>Contact Me</button>
      </div>
      <div className={style.infoDerCont}>
        <img src={computer} className={style.computer} alt="" />
      </div>
    </div>
  );
};
export default Home;
