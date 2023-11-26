import './App.css';
import { Container } from './components/Container';
import { Formtodo } from './components/FormTodo';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Container>
        <Formtodo/>
      </Container>
      
    </div>
  );
}

export default App;
