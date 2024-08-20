
import { ProfileStyle, Avatar, Profilename, Profiletaglocation, Stats} from "./UserProfile.styled";

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
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{user.stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{user.stats.views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{user.stats.likes }</span>
    </li>
  </Stats>
</ProfileStyle>
  );
};
