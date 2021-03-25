import './App.css';
// pages
import Home from "./components/home";

const appStyle = {
  backgroundColor: 'whitesmoke'
}

function App() {
  return (
    <div style={appStyle}>
      <Home />
    </div>
  );
}

export default App;
