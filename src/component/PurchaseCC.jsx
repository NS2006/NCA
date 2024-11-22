import React, {useState} from 'react'

import Header from "./Header.jsx";
import Supported from "./Supported.jsx";
import LatestNews from "./LatestNews.jsx";
import Footer from "./Footer.jsx";

import '../style/PurchaseCC.css'

import vect1 from '../assets/index/vector1.png';
import vect2 from '../assets/index/vector2.png';

import GreenCoin from '../assets/purchaseCC/greenCoin.png'
import CarbonCredit from '../assets/purchaseCC/CarbonCredit.png'
import ArrowRight from '../assets/purchaseCC/arrowRight.png'

function PurchaseCC(){
    document.title = "Purchase CC Page | NCA";

    const [carbonCredit, setCarbonCredit] = useState(0);
    const [currCarbonCredit, setCurrCarbonCredit] = useState(0);

    const currCarbonCreditHandling = (e) => {
        setCurrCarbonCredit(e.target.value / 10);
    }

    const carbonCreditClickHandling = () => {
        setCarbonCredit((c) => c + currCarbonCredit);
    }

    return(
        <>
            <Header/>

            <div className="margin-page-container">
                <div className="background-vector-container">
                    <div className="vector-container vector-up">
                        <img src={vect1} alt="Vector 1" className='vect1'/>
                    </div>

                    {/* Content */}
                    <div className="background-vector-content">
                        {/* Description */}
                        <div className="cc-container">
                            <div className="cc-description-container">
                                <div className="cc-description-top">
                                    <div className="cc-description-left">
                                        <h1>TRADE YOUR GREEN COINS</h1>
                                    </div>
                                    <div className="cc-description-right">
                                        <img src={GreenCoin} alt="Green Coin" />
                                    </div>
                                </div>
                                <div className="cc-description-bottom">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque temporibus, alias minus nemo totam placeat amet aperiam explicabo eum labore? Necessitatibus, vitae rem iste id nemo reiciendis quia nihil debitis, dicta, quo facere. Quis doloribus consectetur impedit dolores aliquam iste, est, incidunt nam explicabo odio officia quisquam quam. Quod, deserunt. lorem100</p>
                                    <p><b>What is Carbon Credit?</b></p>
                                </div>
                            </div>
                        </div>


                        {/* Conversion Description */}
                        <div className="cc-container">
                            <div className="cc-conversion-container">
                                <h1>10 </h1>
                                <img src={GreenCoin} alt="Green Coin" />
                                <h1>= 1 </h1>
                                <img src={CarbonCredit} alt="Carbon Credit"/>
                            </div>
                        </div>

                        <div className="cc-container">
                            <div className="cc-input-container">
                                <p className='cc-input-info'>Your Current Carbon Credit:  <b>{carbonCredit}</b></p>

                                <div className="cc-container">
                                    <div className="cc-input-group">
                                        <div className="cc-input-part">
                                            <h1>Green Coin</h1>
                                        </div>
                                        <div className="cc-input-img" style={{visibility:'hidden'}}>
                                            <img src={ArrowRight} alt="Arrow Right" />
                                        </div>
                                        <div className="cc-input-part">
                                            <h1>Carbon Credit</h1>
                                        </div>
                                    </div>
                                </div>

                                <div className="cc-container">
                                    <div className="cc-input-group">
                                        <div className="cc-input-part cc-white">
                                            <input type="number" name="cc-input-number" id="cc-input-number" placeholder='Enter Amount' onChange={(e) => currCarbonCreditHandling(e)}/>
                                        </div>
                                        <div className="cc-input-img">
                                            <img src={ArrowRight} alt="Arrow Right" />
                                        </div>
                                        <div className="cc-input-part cc-white">
                                            <h1>{currCarbonCredit}</h1>
                                        </div>
                                    </div>
                                </div>

                                <div className="cc-container">
                                    <button className='cc-button' onClick={carbonCreditClickHandling}>TRADE</button>
                                </div>

                                <p className='cc-input-note'>To ensure the transaction is secure, <b>blockchain technology</b> uses decentralized and immutable ledgers, providing <b>transparent, tamper-resistant records</b> that validate each step of the process.</p>
                            </div>
                        </div>

                    </div>
                    <div className="vector-container vector-low">
                        <img src={vect2} alt="Vector 2" className='vect2'/>
                    </div>
                </div>

                <Supported/>
                <LatestNews/>
            </div>
            <Footer/>
        </>
    );
}

export default PurchaseCC;