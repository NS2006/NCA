import { useState } from 'react';

import Header from './Header.jsx'
import Input from './LogRegInput.jsx'
import Footer from './Footer.jsx'

import '../style/LogRegInput.css'

function Login(){
    document.title = "Login Page | NCA";

    // DB Purpose
    const [email, setEmail] = useState();

    return(
        <>
            <Header/>

            <div className="form-container">
                <form className='logReg-form-container'>
                    <Input inputType={"title"} title={"LOGIN"}/>
                    <Input value={email} setValue={setEmail} inputType={"email"} title={"Email"} description={"Provide your personal email"} imgName={"formEmail.png"} placeholder={"sigma@gmail.com"}/>
                </form>
            </div>

            <Footer/>
        </>
    );
}

export default Login;