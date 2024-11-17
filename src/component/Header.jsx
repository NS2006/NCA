import '../style/Header.css'
import logoImg from '../assets/header/logo-img.png'
import logoNCA from '../assets/header/logo-NCA.png'
import loginImg from '../assets/header/login.png'

function Header(){
    return(
        <>
            <div className="header-container">
                <div className="header-logo">
                    <img src={logoImg} alt="Logo Img" className='logo-img'/>
                    <img src={logoNCA} alt="Logo NCA" className='logo-NCA'/>
                </div>
                <div className="header-navbar">
                    <p>
                        <a href="#">Home</a>
                    </p>
                    <p>
                        <a href="#">Contribute</a>
                    </p>
                    <p>
                        <a href="#">Purchase CC</a>
                    </p>
                </div>
                <div className="header-profile">
                    <a href="#">
                        <img src={loginImg} alt="Login Img" />
                    </a>
                </div>
            </div>
        </>
    );
}

export default Header;