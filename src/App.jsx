import './App.css';
import { AuthProvider } from './js/provider/AuthProvider';
import styled from 'styled-components'

const Main = styled.div`
  & {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: whitesmoke;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
  }
`

export const App = () => {
  return (
    <AuthProvider>
      <div className="App">
        <Main>
          <Router
            renderTodos={() => <Todos />}
            renderTodos={() => <Login />}
          />
        </Main>
      </div>
    </AuthProvider>
  );
}
