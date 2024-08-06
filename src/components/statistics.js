import { StatisticsItem } from './statiscticsItem'


export const Statistics = ({ title, data }) => {
  return (
    <section className="statistics">
      {title === " " ? (
        <></>
      ) : (
        <h2 className="title">{title}</h2>
      )}
         <ul className="stat-list" style={{listStyleType: "none"}}>
            {data.map(data => (
          <li>
          <StatisticsItem data={data} />
          </li> 
      ))}
          </ul>
    </section>
  );
};
