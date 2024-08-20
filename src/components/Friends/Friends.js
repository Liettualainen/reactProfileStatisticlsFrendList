import { SiSpringboot } from "react-icons/si";

import { Statlist, SvgItem, SvgItemBack, Status, Img, Name } from "./Friends.styled";

export const FriendsItem = ({ friends: { avatar, name, isOnline } }) => {
    return (
      <Statlist >
        <Status>
          {/* <SvgItemBack isactive={isOnline}>
            <SvgItem isactive={isOnline} > */}
               {/* <SiSpringboot size="30"/> */}
            <SiSpringboot color={isOnline ? "green" : "red"} size="60" />
          {/* </SvgItem>
          </SvgItemBack> */}
        </Status>
        <Img src={avatar} alt="User avatar" width="70" height="70" />
        <Name>{name}</Name>
      </Statlist>
    )
};
