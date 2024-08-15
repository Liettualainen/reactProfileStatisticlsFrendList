import styled from 'styled-components';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215 ).toString(16).padStart(6, 0)}`;
}

export const ProfileStyle = styled.section`
  height: 650px;
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
export const StatlistBack = styled.div`
margin-bottom: 0px;
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
  padding-top: 40px;
  padding-bottom: 33px;
  margin: 0;
  list-style-type: none;
  background-color: ${() => { return getRandomHexColor() }};
`
  export const Item = styled.div`
  display: flex;
    flex-direction: column;
  align-items: center;
    list-style-type: none;
    font-size: 24px;
    font-weight: 700px;
    height: 100%;;
`
export const Labelstyle = styled.span`
    margin-top: 10px;
     font-size: 34px;
    font-weight: 700px;
`
export const Percentagestyle = styled.span`
    padding-top: 20px;
     font-size: 34px;
    font-weight: 700px;
`


export const Title = styled.div`
margin-top: 29px;
  margin-left: auto;
  margin-right: auto; 
`


export const TitleUpload = styled.h2`
margin-left: auto;
  margin-right: auto;
  margin: 33px;
       font-size: 64px;`


