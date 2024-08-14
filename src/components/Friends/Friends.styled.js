import styled from 'styled-components';

export const Statlist = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  width: 480px;
  border: solid;
  border-radius: 15px;
  border-width: 0.1px;
  border-color: gray;
  padding: 0;
  margin-bottom: 10px;
  padding: 15px;
  box-shadow: 10px 5px 5px grey;  
`
export const SvgItem = styled.div`
border: 35px transparent ;
border-radius: 50px; 
svg {
color:${props => {
  return (props.isOnline ? "yellow" : "black");
  }}}
`
export const SvgItemBack = styled.div`
border: 20px transparent solid;
border-radius: 50px; 
background-color:${props => {
  return (props.isOnline ? "green" : "red");
  }}
`


 




// const Status = {
//     padding: 0,
//     marginLeft: 20,
//   marginRight: 40,
//     marginTop: "auto",
//     marginBottom: "auto",
   
// }
// const Name = {
//     padding: 0,
//     marginTop: "auto",
//      marginBottom: "auto",
//     textAlign: "center",
//     marginLeft: "auto",
//   marginRight:"auto",
//     fontSize: 60,
//     fontWeight: 600,
//          width: '100%',
// }
// const Img = {
//     marginTop: "auto",
//      marginBottom: "auto",
// }