
import { ProfileStyle, Avatar, Profilename, Profiletaglocation, Stats, Li, Label,Quantity} from "./UserProfile.styled";

export const User = ({ user }) => {
  return (
    <ProfileStyle>
       <h2>PROFILE</h2>
  <div className="description">
    <Avatar
          src={user.avatar}
          alt={user.username}
          width='340'
    />
    <Profilename><b>{user.username}</b></Profilename>
    <Profiletaglocation>@{user.tag}</Profiletaglocation>
    <Profiletaglocation>{user.location}</Profiletaglocation>
  </div>
  <Stats>
    <Li>
      <Label>Followers</Label>
          <Quantity>{Intl.NumberFormat().format(user.stats.followers)}</Quantity>
    </Li>
    <Li>
      <Label>Views</Label>
      <Quantity>{Intl.NumberFormat().format(user.stats.views)}</Quantity>
    </Li>
    <Li>
      <Label>Likes</Label>
      <Quantity>{Intl.NumberFormat().format(user.stats.likes)} </Quantity>
    </Li>
  </Stats>
</ProfileStyle>
  );
};
