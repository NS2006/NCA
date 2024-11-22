import '../style/Header.css'
import logoImg from '../assets/header/logo-img.png'
import logoNCA from '../assets/header/logo-NCA.png'
import loginImg from '../assets/header/login.png'

import { Link } from "react-router-dom";

function Header(){
    return(
        <>
            <div className="header-container">
                <Link to="/NCA" className="header-logo">
                    <img src={logoImg} alt="Logo Img" className='logo-img'/>
                    <img src={logoNCA} alt="Logo NCA" className='logo-NCA'/>
                </Link>
                <div className="header-navbar">
                    <p>
                        <Link to="/NCA">Home</Link>
                    </p>
                    <p>
                        <Link to="/NCA/contribute">Contribute</Link>
                    </p>
                    <p>
                        <Link to="/NCA/purchaseCC">Purchase CC</Link>
                    </p>
                </div>
                <div className="header-profile">
                    <Link to="/NCA/login">
                        <img src={loginImg} alt="Login Img" />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Header;