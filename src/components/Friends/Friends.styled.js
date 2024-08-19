import styled from 'styled-components';

export const ProfileStyle = styled.section`
  height: 1000px;
  width: 650px;
  margin-top: 60px;
  display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
  color: #010101;
  border: solid;
  border-width: 10px;
  border-radius: 25px;
  border-color: green;
  background-color: rgb(240, 241, 242);
`
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
export const Statitem = styled.ul`
      list-style-type: none;
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
  export const Status = styled.span`
    padding: 0;
    margin-left: 20px;
    margin-right: 40px;
    margin-top: auto;
    marginBottom: auto;
  ` 
export const Img = styled.img`
    margin-top: auto;
     margin-bottom: auto;
`
export const Name = styled.p `
    padding: 0;
    margin-top: auto;
     margin-bottom: auto;
    text-align: center;
    margin-left: auto;
  margin-right:auto;
    font-size: 60px;
    font-weight: 600px;
         width: 100%;
`
