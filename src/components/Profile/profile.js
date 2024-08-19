const profileStyle = {
  height: 1000,
  width: 650,
  marginTop: 60,
  padding:0,
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

const Stats = {
  padding: 0,
  margin: 0,
  width: "100%",
   display: "flex",
 flexDirection: "row",
 flexWrap: "wrap",
justifyContent: "space-around",
  fontSize: 20,
  listStyleType: "none",
  textAlign: "left",
  border: '1px red solid',
   borderRadius: " 0 0 10px 10px",
  backgroundColor: "lightgrey",
  height: "100%",
}

        



export const User = ({ profile }) => {
  return (
    <div className="profile" style={profileStyle}>
       <h2>PROFILE</h2>
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
  <ul className="stats" style={Stats}>
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
