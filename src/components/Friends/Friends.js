import { SiSpringboot } from "react-icons/si";

import { Statlist, SvgItem  } from "./Friends.styled";
const Status = {
    padding: 0,
    marginLeft: 10,
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
      <Statlist >
        <span className="status" style={Status} >
          <SvgItem isActive={isOnline}>
               <SiSpringboot  size="40"/>
            {/* <SiSpringboot color={isOnline ? "green" : "red"} size="30" /> */}
          </SvgItem>
          
        </span>
        <img className="avatar" style={Img} src={avatar} alt="User avatar" width="70" height="70" />
        <p className="name" style={Name}>{name}</p>
      </Statlist>
    )
};




// const Statlist = {
//   display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'left',
//   listStyleType: "none",
//   width: 480,
//     border: 'solid',
//       borderRadius: 15,
//   borderWidth: 0.1,
//     borderColor: 'grey',
//     margin: 10,
//     padding: 15,
//     boxShadow: '10px 5px 5px grey',
    
// }