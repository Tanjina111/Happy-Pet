import './App.css';
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

function App() {

  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
        <Home></Home>
        </Route>
        <Route path='/home'>
        <Home></Home>
        </Route>
        <PrivateRoute path='/detail/:phone'>
          <Detail></Detail>
        </PrivateRoute>
        <Route path='/about'>
          <About></About>
          </Route>
        <Route path='/vet'>
          <Vet></Vet>
        </Route>
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
