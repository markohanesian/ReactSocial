import './App.css';
// pages
import Home from "./components/home";
import { UserContextProvider } from './contexts/user';

const appStyle = {
  backgroundColor: 'whitesmoke'
}

function App() {
  return (
    <UserContextProvider>
      <div style={appStyle}>
        <Home />
      </div>
    </UserContextProvider>
  );
}

export default App;
