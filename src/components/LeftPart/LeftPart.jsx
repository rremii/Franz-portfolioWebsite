import React from 'react'
import css from './LeftPart.module.sass'
import AboutCard from "./AboutCard/AboutCard";
import PortfolioContactInfo from "./PortfolioContactInfo/PortfolioContactInfo";

const LeftPart = () => {
    return <div className={css.LeftPart}>
        <AboutCard/>
        <PortfolioContactInfo/>
    </div>
}
export default LeftPart