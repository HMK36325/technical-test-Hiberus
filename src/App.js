import { Suspense } from 'react';
import { UserContextProvider } from 'context/userContext';
import { Switch, Route } from 'wouter';

import HeaderNav from 'components/HeaderNav';
import Footer from 'components/Footer';
import HomePage from 'pages/Home';
import Login from 'components/Login';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <HeaderNav />
        <Suspense fallback={null}>
          <Switch>
            <Route component={HomePage} path="/" />
            <Route component={Login} path="/login" />
          </Switch>
          <Footer />
        </Suspense>
      </div>
    </UserContextProvider>
  );
}

export default App;
