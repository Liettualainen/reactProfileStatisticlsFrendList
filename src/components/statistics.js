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
const Statlist = {
  display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
  alignItems: 'center',
  listStyleType: "none",
  width: 650,
  padding: 0,
  margin: 0,
  backgroundColor: "yellow",
}
const StatLi = {
  width: '100%',
    padding: 0,
    border: '2px solid',
}

const Div = {
  display: 'flex',

}

const title1 = {
  marginTop: 50,
  marginLeft: 'auto',
  marginRight: 'auto',
  
}
const TitleUpload = {
  marginLeft: "auto",
  marginRight: "auto",
  margin: 33,
       fontSize: 64,
}



export const Statistics = ({ title, data }) => {
//  const title = "UPLOAD STATS";
  return (
    <section className="statistics" style={profileStyle}>
      { !title ? (
       null
      ) : (<div >
          <div style={Div}>
            <FaCloudUploadAlt style={title1} size="230" color="green" />
          </div>
       
          <h2 className="title" style={TitleUpload}>{title}</h2>
      </div>
      )}

         <ul className="stat-list" style={Statlist}>
            {data.map(data => (
          <li  style={StatLi} key={data.id}>
          <StatisticsItem data={data} />
          </li> 
      ))}
          </ul>
    </section>
  );
};
