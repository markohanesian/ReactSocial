import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar';
import FooterBar from './components/FooterBar';
import Home from "./components/home";
import About from './components/about';
import SignedOut from './components/SignedOut';
import { UserContextProvider } from './contexts/user';

const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'whitesmoke',
  minHeight: '100vh',
};

export default function App() {
  return (
    <UserContextProvider>
      <Router>
        <div style={appStyle}>
          <NavBar />
          <Switch>
            <Route path="/signed-out">
              <SignedOut />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <FooterBar />
        </div>
      </Router>
    </UserContextProvider>
  );
}