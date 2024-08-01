import user from '../dataFiles/user.json';
import { User } from './profile';
import data from '../dataFiles/data.json';
import { Statistics } from './statistics';
// console.log(data);

const Layout = {
marginTop: 10,
  display: 'flex',
          flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
}

export const App = () => {
  return (
    <div style={Layout}>
      <User profile={user} />
      <Statistics data={data} />
      <User profile={user} />
      <User profile={user} />
    </div>
  )
};



























// const avatar = {
//   width: 340,
//   borderRadius: '50%',
//   // border: 'solid',
//   // borderWidth: 0.1,
//     //  borderColor: 'red',
//      backgroundColor: 'rgb(209, 245, 196)',
// }


// const User = ({ profile }) => {
//   return (
//     <div className={profileStyle}>
//   <div className="description">
//     <img
//           src={profile.avatar}
//           alt={profile.username}
//           style={avatar}
//           width='340'
       
//     />
//     <p className="name"><b>{profile.username}</b></p>
//     <p className="tag">@{profile.tag}</p>
//     <p className="location">{profile.location}</p>
//   </div>
//   <ul className="stats">
//     <li>
//       <span className="label">Followers</span>
//       <span className="quantity">{profile.stats.followers}</span>
//     </li>
//     <li>
//       <span className="label">Views</span>
//       <span className="quantity">{profile.stats.views}</span>
//     </li>
//     <li>
//       <span className="label">Likes</span>
//       <span className="quantity">{profile.stats.likes }</span>
//     </li>
//   </ul>
// </div>
//   );
// };







    // <>
    // <img src={profile.avatar} alt={profile.username} width="440" />
    // <ul style={liStyle}>
    //   <li><b>Username: </b>{profile.username}</li>
    //   <li><b>Tag: </b>{profile.tag}</li>
    //   <li><b>Location: </b> {profile.location}</li>
    //   <li><b>Followers: </b>{profile.stats.followers}</li>
    //   <li><b>Views: </b>{profile.stats.views}</li>
    //   <li><b>Likes: </b>{profile.stats.likes }</li>
    // </ul>
    // </>// const user = {
//   "username": "Jacques Gluke",
//   "tag": "jgluke",
//   "location": "Ocho Rios, Jamaica",
//   "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
//   "stats": {
//     "followers": 5603,
//     "views": 4827,
//     "likes": 1308
//   }
// };// const liStyle = {
//   // display: 'flex',
//   //  justifyContent: 'space-between',
//   // flexDirection: 'column',
//   //  alignItems: 'left',
//   // marginLeft: 100,
//   // listStyleType: 'none',
// }
//   .li = {
//   listStyleType: 'none',
//   lineHeight: 1.5,
//   fontSize: 26,
//   marginLeft: 30,
// }