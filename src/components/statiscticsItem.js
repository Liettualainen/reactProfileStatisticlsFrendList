export const StatisticsItem = ({ data: {id, label, percentage} }) => {
    return (
        <div className="item"  key={id}>
            <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
        </div>
    )
};