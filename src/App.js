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
import NewsList from "./components/NewsList";
// user
import { UserContextProvider } from './contexts/user';

const appStyle = {
  display: 'flex',
  flexDirection: 'column'
}

export default function App() {


  return (
    <UserContextProvider>
      <Router>
        <div style={appStyle}>
          <Switch>
            <Route path="/news">
              <NavBar />
              <NewsList />
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

