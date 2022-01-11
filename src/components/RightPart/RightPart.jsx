import css from './RightPart.module.sass'
import TopSection from "./TopSection/TopSection";
import PortfolioInfoCard from "./PortfolioInfoCard/PortfolioInfoCard";
import Tree from "./Tree/Tree";

const RightPart = () => {
    return <div className={css.RightPart}>
        <TopSection/>
        <PortfolioInfoCard/>
        <Tree/>
    </div>
}
export default RightPart