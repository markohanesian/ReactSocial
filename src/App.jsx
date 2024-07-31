import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import FooterBar from "./components/FooterBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import UserPostsPage from "./pages/UserPostsPage";
import SignedOut from "./components/SignedOut";
import { UserContextProvider } from "./contexts/user";
import FeedPage from "./pages/FeedPage";

const appStyle = {
  display: "flex",
  flexDirection: "column",
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
              <AboutPage />
            </Route>
            <Route path="/posts">
              <UserPostsPage />
            </Route>
            <Route path="/feed">
              <FeedPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
          <FooterBar />
        </div>
      </Router>
    </UserContextProvider>
  );
}
