import { StatisticsItem } from './statiscticsItem'
import { FaCloudUploadAlt } from "react-icons/fa";

const profileStyle = {
  height: 650,
  width: 650,
  marginTop: 60,
  display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
  color: '#010101',
  border: 'solid',
  borderWidth: 10,
  borderRadius: 25,
  borderColor: 'green',
  backgroundColor: 'rgb(240, 241, 242)',
}

export const Statistics = ({ title, data }) => {
//  const title = "UPLOAD STATS";
  return (
    <section className="statistics" style={profileStyle}>
      { !title ? (
       null
      ) : (<><FaCloudUploadAlt size="230" />
          <h2 className="title"> {title}</h2>
      </>
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
