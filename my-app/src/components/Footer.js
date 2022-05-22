import React from "react";
import { useState } from "react";
import '../App.css';

function Footer() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className='footer-container'>
            <div className="arba-bloqueada">
                <button className={toggleState === 1 ? "arba arba-ativa" : "arba"} onClick={() => toggleTab(1)}>Arba 1
                </button>
                <button className={toggleState === 2 ? "arba arba-ativa" : "arba"} onClick={() => toggleTab(2)}>Arba 2
                </button>
                <button className={toggleState === 3 ? "arba arba-ativa" : "arba"} onClick={() => toggleTab(3)}>Arba 3
                </button>
            </div>
            <div className="arba-surto">
            <div className={toggleState === 1 ? "surto surto-ativo" : "surto"}>
                <h2>Surto 1 - Questionando a existência</h2>
                        <p>
                        Banana is life. I want french fries. <br />
                        My life is a mess. I want a vacation. <br />
                        What I'm doing here? Life is meaningless. <br />
                        I just want a break.
                        </p>
            </div>
            <div className={toggleState === 2 ? "surto surto-ativo" : "surto"}>
                <h2>Surto 2 - Um gato morreu</h2>
                        <p>
                        I swallowed shampoo. Probably gonna die. <br />
                        It smelt like fruit. That was a lie. <br />
                        Called the number on the bottle. Spoke to a guy. <br />
                        He said "vomit". I said "why?". <br />
                        He said "poison". I said "goodbye". <br />
                        I looked at my finger. And looked at my life. <br />
                        It wasn't that much. I'll probably fine.
                        </p>
            </div>
            <div className={toggleState === 3 ? "surto surto-ativo" : "surto"}>
                <h2>Surto 3 - Música para não desistir</h2>
                        <p>
                        We're no strangers to love <br />
                        You know the rules and so do I (do I) <br />
                        A full commitment's what I'm thinking of <br />
                        You wouldn't get this from any other guy <br />
                        I just wanna tell you how I'm feeling <br />
                        Gotta make you understand <br />
                        Never gonna give you up <br />
                        Never gonna let you down <br />
                        Never gonna run around and desert you <br />
                        Never gonna make you cry <br />
                        Never gonna say goodbye <br />
                        Never gonna tell a lie and hurt you. 
                        </p>
            </div>
        </div>
    </div>
    );
};

export default Footer;