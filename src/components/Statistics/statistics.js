import { FaCloudUploadAlt } from "react-icons/fa";
import { StatisticsItem } from './statiscticsItem'
import {
  StatLi, Statlist, StatlistBack, ProfileStyle,
  Title, TitleUpload
} from "./Statistics.styled"

export const Statistics = ({ title, data }) => {
  return (
    <ProfileStyle>
      { !title ? (
       null
      ) : (<Title>    
            <FaCloudUploadAlt size="230" color="green" />
          <TitleUpload>{title}</TitleUpload>
      </Title>
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
