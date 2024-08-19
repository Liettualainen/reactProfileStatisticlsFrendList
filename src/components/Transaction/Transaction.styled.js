import styled from 'styled-components';

export const ProfileStyle = styled.section`
  height: 1000px;
  width: 650px;
  margin-top: 60px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #010101;
  border: solid;
  border-width: 10px;
  border-radius: 25px;
  border-color: green;
  background-color: rgb(240, 241, 242);
`
export const HaderColumn = styled.thead`
 margin-top:10px;
`
export const HaderItems = styled.tr`
`
export const HaderItem = styled.th`
width: 201px;
height: 40px;
color: white;
text-transform: uppercase;
background-color:rgba(111,202,221,255);
border: 1px rgb(230, 230, 230) solid;
`
export const MainItems = styled.tbody`
tr:nth-child(even) {
  background-color: rgba(206,206,206);
}
`
export const MainItem = styled.tr`
`
export const Item = styled.tr`
`

export const ItemShape = styled.td`
color: grey;
text-transform: capitalize;
width: 200px;
height: 40px;
border: 1px rgb(230, 230, 230) solid;
`