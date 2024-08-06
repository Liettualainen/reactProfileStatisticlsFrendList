import { StatisticsItem } from './statiscticsItem'

export const Statistics = ({ title, data }) => {
//  const title = "UPLOAD STATS";
  return (
    <section className="statistics">
      { (!title) ? (
       null
      ) : (
         <h2 className="title">{title}</h2>
      )}


         <ul className="stat-list" style={{listStyleType: "none"}}>
            {data.map(data => (
          <li  key={data.id}>
          <StatisticsItem data={data} />
          </li> 
      ))}
          </ul>
    </section>
  );
};
