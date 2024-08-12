import { SiSpringboot } from "react-icons/si";

const Statlist = {
  display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
  listStyleType: "none",
  width: 480,
    border: 'solid',
      borderRadius: 15,
  borderWidth: 0.1,
    borderColor: 'grey',
    margin: 10,
    padding: 15,
    boxShadow: '10px 5px 5px grey',
    
}
const Status = {
    padding: 0,
    marginLeft: 20,
  marginRight: 40,
    marginTop: "auto",
    marginBottom: "auto",
   
}
const Name = {
    padding: 0,
    marginTop: "auto",
     marginBottom: "auto",
    textAlign: "center",
    marginLeft: "auto",
  marginRight:"auto",
    fontSize: 60,
    fontWeight: 600,
         width: '100%',
}
const Img = {
    marginTop: "auto",
     marginBottom: "auto",
}



export const FriendsItem = ({ friends: { avatar, name, isOnline } }) => {
    return (
      <div className="item" style={Statlist}>
        <span className="status" style={Status}>
          <SiSpringboot color={isOnline} size="30" />
        </span>
        <img className="avatar" style={Img} src={avatar} alt="User avatar" width="70" height="70" />
        <p className="name" style={Name}>{name}</p>
      </div>
    )
};