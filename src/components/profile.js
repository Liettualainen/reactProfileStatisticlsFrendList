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
const avatar = {
  marginTop: 50,
  width: 280,
  borderRadius: '50%',
  // border: 'solid',
  // borderWidth: 0.1,
    //  borderColor: 'red',
     backgroundColor: 'rgb(209, 245, 196)',
}

const profilename = {
  fontSize: 26,
  textAlign: "center",
}

export const User = ({ profile }) => {
  return (
    <div  className="profile" style={profileStyle}>
  <div className="description">
    <img
          src={profile.avatar}
          alt={profile.username}
          style={avatar}
          width='340'
    />
    <p className="name" style={profilename}><b>{profile.username}</b></p>
    <p className="tag">@{profile.tag}</p>
    <p className="location">{profile.location}</p>
  </div>
  <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{profile.stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{profile.stats.views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{profile.stats.likes }</span>
    </li>
  </ul>
</div>
  );
};
