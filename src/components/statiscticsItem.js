export const StatisticsItem = ({ data: {label, percentage} }) => {
    return (
        <div className="item">
            <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
        </div>
    )
};