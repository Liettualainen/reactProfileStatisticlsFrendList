import styled from 'styled-components';

export const ProfileStyle = styled.div`
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

export const Avatar = styled.img` 
    margin-top: 50px;
        margin-bottom: 30px;
  width: 280px;
  border-radius: 50%;
  border: solid;
  border-width: 1px;
     border-color: red;
     backgroundColor: 'rgb(209, 245, 196)';
`

export const Profilename = styled.p`
  font-size: 48px;
  margin: 0px;
  padding: 0px;
`

export const Profiletaglocation = styled.p`
  font-size: 38px;
  color: grey;
`



export const Stats = styled.ul`
  padding: 0px;
  margin: 0px;
  width: 100%;
   display: flex;
 flex-direction: row;
 flex-wrap: wrap;
justify-content: space-around;
  font-size: 20px;
  list-style-type: none;
  text-align: left;
  border: 1px red solid;
   border-radius:  0 0 10px 10px;
  background-color: lightgrey;
  height: 100%;
`