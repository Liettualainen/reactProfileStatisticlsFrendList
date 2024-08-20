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
        padding: 15px;
  width: 300px;
  border-radius: 50%;
  border: 1px solid #ddd;
}
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
   display: flex;
 flex-direction: column;
 flex-wrap: wrap;
 justify-content: space-around;
  margin: 0px;
  padding: 0px;
  font-size: 20px;
list-style-type: none;
  background-color: rgb(231, 239, 249);
//   border: 1px solid grey;

`
export const Li = styled.li`
   display: flex;
 flex-direction: column;
  justify-content: center;
  align-items: center;
width: 210px;
  height: 100%;
   border: 1px solid grey;
`

export const Label = styled.span`
  font-size: 30px;
 	height: 20%;
`
export const Quantity = styled.span`
  font-size: 40px;
  font-weight: 700;

`