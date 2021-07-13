import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';

//algo:
//1.show login by default
//2.show spinner for 2 seconds after login cick
//3.show logout
//4.show login after logout click

class Auth extends React.Component {
  state = {
    isLoggedIn: false,
    isLogging: false,
  };
  onLogin = () => {
    this.setState({
      isLogging: true,
    });

    console.log('Set state called!')

    //input: func, ms
    //output: undefined
    setTimeout(() => {
      this.setState({
        isLoggedIn: true,
        isLogging: false,
      });
    }, 2000);
  }

  onLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    // let button;
    // if (this.state.isLoggedIn) {
    //   button = <Login onLogin={this.onLogin} />;
    // } else {
    //   button = <Logout onLogout={this.onLogout} />;
    // }
    // return <div>{this.state.isLogging ? <Spinner size={20} /> : button}</div>;

    //ternary
    //condition ? RESULT1 : RESULT2
    const { isLogging, isLoggedIn } = this.state;
    if (isLogging) {
      return <Spinner size={50} />;
    }
    if (isLoggedIn) {
      return <Logout onLogout={this.onLogout} />;
    }
    return <Login onLogin={this.onLogin} />;
  
  }
}

export default Auth;

//Cannot read property 'setState' of undefined -втрата контексту

      // <>
      //   {this.state.isLoggedIn ? (
      //     <Logout onLogout={this.onLogout} />
      //   ) : (
      //     <Login onLogin={this.onLogin} />
      //   )}
      //   {<Spinner size={20} />}
      // </>

