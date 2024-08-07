
import { GoFile } from "react-icons/go";
import { VscPercentage } from "react-icons/vsc";
// import { FaPercentage } from "react-icons/fa";
// <FaPercentage />

const item = {
  display: 'flex',
    flexDirection: 'column',
  alignItems: 'center',
    listStyleType: "none",
    fontSize: 24,
    fontWeight: 700,
    marginTop: 50,
  marginBottom: 50,
}

const percentagestyle = {
    paddingTop: 20,
     fontSize: 34,
    fontWeight: 700,
}



export const StatisticsItem = ({ data: { label, percentage } }) => {
    return (
        <div className="item" style={item}>
            <GoFile size="40" color="green"/> 
            <span className="label" >{label}</span>
      <span className="percentage" style={percentagestyle}>{percentage} <VscPercentage /></span>
        </div>
    )
};