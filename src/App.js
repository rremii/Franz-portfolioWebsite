import logo from './logo.svg';
import './App.sass';
import nasa from './images/nasa.png'
import LeftPart from "./components/LeftPart/LeftPart";
import React from "react";
import RightPart from "./components/RightPart/RightPart";
import KFooter from "./components/KFooter/KFooter";
import Logo from './images/Logo.svg'
import CV from './images/CV.svg'

function App() {
    return (
        <div className="App">
            <LeftPart/>
            <RightPart/>
            <KFooter/>
            <img className='logo' src={Logo} alt=""/>
            <img className='CV' src={CV} alt=""/>
            <div className='nasaBG'>
                <img src={nasa} alt=""/>
            </div>
        </div>
    );
}

export default App;
