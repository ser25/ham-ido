import ButtonConnectMetaMask from "../components/ButtonConnectMetaMask.tsx";
import LiSocialItemLink from "../components/LiSocialItemLink.tsx";
import HeaderLogo from "../components/Header/HeaderLogo.tsx";

export default function Header() {
  return (
    <header className="mint-header">
      <svg
        className="wave_top"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#F1BD7B99"
          fillOpacity="0.7"
          d="M0,256L30,256C60,256,120,256,180,229.3C240,203,300,149,360,149.3C420,149,480,203,540,192C600,181,660,107,720,112C780,117,840,203,900,202.7C960,203,1020,117,1080,74.7C1140,32,1200,32,1260,80C1320,128,1380,224,1410,272L1440,320L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg>
      <div className="container">
        <HeaderLogo />
        <nav id="nav">
          <ul>
            <LiSocialItemLink />
            <ButtonConnectMetaMask />
          </ul>
        </nav>
      </div>
    </header>
  );
}
