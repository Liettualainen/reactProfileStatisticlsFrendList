import styled from 'styled-components';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215 ).toString(16).padStart(6, 0)}`;
}

export const ProfileStyle = styled.section`
  height: 650px;
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
export const StatlistBack = styled.div`
margin-bottom: -4px;
`
export const Statlist = styled.ul`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
width: 630px;
padding: 0;
margin:0;
`
export const StatLi = styled.li`
  width: 100%;
  padding: 0;
  margin: 0;
  list-style-type: none;
  background-color: ${() => { return getRandomHexColor() }};
`



