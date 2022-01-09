import logo from './logo.svg';
import './App.sass';
import nasa from './images/nasa.png'
import LeftPart from "./components/LeftPart/LeftPart";
import React from "react";
import RightPart from "./components/RightPart/RightPart";
import KFooter from "./components/KFooter/KFooter";

function App() {
    return (
        <div className="App">
            <LeftPart/>
            <RightPart/>
            <KFooter/>
            <div className='nasaBG'>
                <img src={nasa} alt=""/>
            </div>
        </div>
    );
}

export default App;
