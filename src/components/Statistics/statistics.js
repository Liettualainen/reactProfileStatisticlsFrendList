import { StatisticsItem } from './statiscticsItem'
import { FaCloudUploadAlt } from "react-icons/fa";

import {StatLi, Statlist, StatlistBack, ProfileStyle} from "./Statistics.styled"
 
const Div = {
  display: 'flex',
}
const title1 = {
  marginTop: 29,
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
    <ProfileStyle>
      { !title ? (
       null
      ) : (<div >
          <div style={Div}>
            <FaCloudUploadAlt style={title1} size="230" color="green" />
          </div>
          <h2 className="title" style={TitleUpload} >{title}</h2>
      </div>
      )}
      <StatlistBack>
              <Statlist>
        {data.map(data => (
            <StatLi key={data.id} >
          <StatisticsItem data={data} />
          </StatLi> 
      ))}
          </Statlist>
      </StatlistBack>

    </ProfileStyle>
  );
};
