import { GoFile } from "react-icons/go";
import { VscPercentage } from "react-icons/vsc";
import {Item, Percentagestyle, Labelstyle } from "./Statistics.styled"
// import { FaPercentage } from "react-icons/fa";
// <FaPercentage />


export const StatisticsItem = ({ data: { label, percentage } }) => {
  return (
      
      <Item>
            <GoFile size="50" color="yellow"/> 
            <Labelstyle>{label}</Labelstyle>
        <Percentagestyle>
          {percentage}<VscPercentage /></Percentagestyle>
        </Item>
    )
};