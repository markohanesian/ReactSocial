import './App.css';
// router for page routing
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar';
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
            </Route>
            <Route path="/news">
              <NavBar />
              <News />
            </Route>
            <Route path="/">
              <NavBar />
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </UserContextProvider>
  );
};

