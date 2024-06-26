import './App.css';
import styled from 'styled-components'
import HomeComponent from './modules/home';

function App() {

  const Container = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  align-items: center;
  height: 100vh;
  width: 98%;
  padding-top: 30px ;
  font-family: "Roboto Slab", serif;
`;

const Header = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 22px;
  font-size: 25px;
  font-weight: bold;
`;


  return (
    <div className="App">
      <Container>
      <Header>Expense Tracker</Header>
      <HomeComponent />
      </Container>
    
    </div>
  );
}

export default App;
