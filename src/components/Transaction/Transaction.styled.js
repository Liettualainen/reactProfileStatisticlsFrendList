import styled from 'styled-components';

export const ProfileStyle = styled.div`
  height: 1000px;
  width: 650px;
  margin-top: 60px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid;
  border-width: 10px;
  border-radius: 25px;
  border-color: green;
  background-color: rgb(240, 244, 242);
`
export const HaderColumn = styled.thead`

 margin-top:10px;
`
export const HaderItem = styled.th`
width: 201px;
height: 40px;
color: white;
text-transform: uppercase;
background-color:rgba(110,202,221,255);
// border: 1px rgb(230, 230, 230) solid;
`
export const MainItems = styled.tbody`
tr:nth-child(even) {
  background-color: rgba(206,206,206);
}
  tr:nth-child(odd) {
  background-color: rgba(350,350,300);
}
`
export const ItemShape = styled.td`
width: 200px;
height: 40px;
color: grey;
text-transform: capitalize;
`

export const MainItem = styled.tr`

`
export const HaderItems = styled.tr`
`