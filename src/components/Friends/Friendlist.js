import { FriendsItem } from './Friends'
import { ProfileStyle, Statitem  } from "./Friends.styled";

export const Friendlist = ({ friends }) => {
  return (
    <ProfileStyle>
        <h2>FRIEND LIST</h2>
         <Statitem>
            {friends.map(friends => (
          <li  key={friends.id}>
          <FriendsItem friends={friends} />
          </li> 
      ))}
          </Statitem>
    </ProfileStyle>
  );
};