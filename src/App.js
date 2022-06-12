import { UserContextProvider } from 'context/userContext';
import { Switch, Route } from 'wouter';

import HeaderNav from 'components/HeaderNav';
import Footer from 'components/Footer';
import HomePage from 'pages/Home';
import LoginPage from 'pages/Login';
import RegisterPage from 'pages/Register';
import UsersPage from 'pages/Users';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <UserContextProvider>
        <HeaderNav />
        <div className="App-content">
            <Switch>
              <Route component={HomePage} path="/" />
              <Route component={LoginPage} path="/login" />
              <Route component={RegisterPage} path="/register" />
              <Route component={UsersPage} path="/users" />
            </Switch>
        </div>
        <Footer />
    </UserContextProvider>
  );
}

export default App;
