import { SiSpringboot } from "react-icons/si";

import { Statlist, SvgItem, SvgItemBack, Status, Img, Name } from "./Friends.styled";

export const FriendsItem = ({ friends: { avatar, name, isOnline } }) => {
    return (
      <Statlist >
        
        <Status>
          <SvgItemBack isonline={isOnline}>
            <SvgItem isonline={isOnline} >
               <SiSpringboot size="30"/>
            {/* <SiSpringboot color={isonline ? "green" : "red"} size="30" /> */}
          </SvgItem>
          </SvgItemBack>
        </Status>
        <Img src={avatar} alt="User avatar" width="70" height="70" />
        <Name>{name}</Name>
      </Statlist>
    )
};
