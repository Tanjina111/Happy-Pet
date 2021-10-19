import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Login from './Component/Login/Login';
import Registration from './Component/Registration/Registration';
import Header from './Component/Header/Header';
import AuthProvider from './Context/AuthProvider';
import PageError from './Component/PageError/PageError';
import Footer from './Component/Footer/Footer';
import Vet from './Component/Vet/Vet';
import Detail from './Component/Detail/Detail';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
// import PrivateRoute from './Component/PrivateRoute/PrivateRoute';


function App() {
  const [service, setService] = useState([]);

  // Get data
  useEffect(() => {
    fetch('./data.json')
    .then(res => res.json())
    .then(data => setService(data));
}, []);
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
        <Home service= {service}></Home>
        </Route>
        <Route path='/home'>
        <Home></Home>
        </Route>
        <PrivateRoute path='/detail'>
          <Detail service= {service}></Detail>
        </PrivateRoute>
        <PrivateRoute path='/about'>
          <About></About>
          </PrivateRoute>
        <PrivateRoute path='/vet'>
          <Vet></Vet>
        </PrivateRoute>
        <Route path='/login'>
        <Login></Login>
        </Route>
        <PrivateRoute path='/register'>
        <Registration></Registration>
        </PrivateRoute>
        
        <Route path='*'>
          <PageError></PageError>
        </Route>
        {/* <PrivateRoute path='/shipping'>
        <Ship></Ship>
        </PrivateRoute> */}
      </Switch>
      <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
