import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import App from './app';
 
  function Decide(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <App />;
    }
    return <Login/> ;
  }


ReactDOM.render(
    // Try changing to isLoggedIn={false}:
    <Decide isLoggedIn={true} />,
    document.getElementById('root')
  );


