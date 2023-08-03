import logo from "../../assets/img/logo.png";
import dot from "../../assets/img/dot.png";

const HeaderLogo = () => {
  return (
    <a href="#" target="_self" className="logo_block">
      <img src={logo} className="logo" alt="" />
      <img src={dot} className="dot" alt="" />
    </a>
  );
};

export default HeaderLogo;
