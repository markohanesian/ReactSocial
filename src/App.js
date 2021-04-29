import './App.css';
// router for page routing
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar';
import FooterBar from './components/FooterBar';
// pages
import Home from "./components/home";
import News from "./components/news";
import About from './components/about';
// user
import { UserContextProvider } from './contexts/user';

const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'whitesmoke'
}

export default function App() {


  return (
    <UserContextProvider>
      <Router>
        <div style={appStyle}>
          <Switch>
            <Route path="/about">
              <NavBar />
              <About />
              <FooterBar />
            </Route>
            <Route path="/news">
              <NavBar />
              <News />
              <FooterBar />
            </Route>
            <Route path="/">
              <NavBar />
              <Home />
              <FooterBar />
            </Route>
          </Switch>
        </div>
      </Router>
    </UserContextProvider>
  );
};

