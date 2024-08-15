import {Container, Main} from './Layout.styled'

export const Layout = ({ children }) => {
   return (
      < Container>
         <header>HEADER</header>
         <Main>{ children}</Main>
         <foter>FOOTER</foter>
      </ Container>
    
   )

}





// export const statistics = styled.section`
//   height: 1650,
//   width: 650,
//   marginTop: 60,
//   display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//   color: '#010101',
//   border: 'solid',
//   borderWidth: 10,
//   borderRadius: 25,
//   borderColor: 'green',
//   backgroundColor: 'rgb(240, 241, 242)',
// `

