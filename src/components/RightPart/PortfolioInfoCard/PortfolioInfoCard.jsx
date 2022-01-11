import css from './PortfolioInfoCard.module.sass'
import React from "react";
import HexButtonGroup from "./HexButtonGroup/HexButtonGroup";
import IconGroup from "./IconGroup/IconGroup";
import TextGroup from "./TextGroup/TextGroup";

const PortfolioInfoCard = (props) => {
    return <div className={css.PortfolioInfoCard}>
        <HexButtonGroup/>
        <div className={css.container}>
            <IconGroup/>
            <TextGroup/>
        </div>
    </div>
}
export default PortfolioInfoCard