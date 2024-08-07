import { FriendsItem } from './friends'

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

export const Friendlist = ({ friends }) => {
  return (
       <section className="statistics" style={profileStyle}>
         <ul className="stat-list" style={{listStyleType: "none"}}>
            {friends.map(friends => (
          <li  key={friends.id}>
          <FriendsItem friends={friends} />
          </li> 
      ))}
          </ul>
    </section>
  );
};