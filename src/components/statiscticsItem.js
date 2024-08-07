
import { GoFile } from "react-icons/go";
import { VscPercentage } from "react-icons/vsc";
// import { FaPercentage } from "react-icons/fa";
// <FaPercentage />


export const StatisticsItem = ({ data: { label, percentage } }) => {
    return (
        <div className="item">
            <span className="label"><GoFile /> {label}</span>
      <span className="percentage">{percentage} <VscPercentage /></span>
        </div>
    )
};