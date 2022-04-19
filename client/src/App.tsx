import React, { useEffect } from 'react';
import Home from './pages/Home';
import Post from './pages/Post';
import Navbar from './containers/Navbar';

import { Switch, Route, useHistory, Redirect } from 'react-router-dom';

import SnackBar from './components/snackbar/SnackBar';

import { useDispatch, useSelector } from 'react-redux';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const history = useHistory();


  return (
    <>
      <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/post" component={Post} />
            <Route>
              <Redirect to="/post" />
            </Route>
          </Switch>
      </div>
      <SnackBar
        position={{ vertical: 'bottom', horizontal: 'left' }}
        duration={3000}
      />
    </>
  );
}

export default App;
