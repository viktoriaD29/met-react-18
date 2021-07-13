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
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
      isLogging: false,
    };
  }

  onLogin = () => {
    this.setState({
      isLoggedIn: true,
      isLogging: true,
    });

    setTimeout(() => {
      this.setState({
        isLoggedIn: false,
        isLogging: false,
      });
    }, 2000);
  };

  onLogout = () => {
    this.setState({
      isLoggedIn: true,
      isLogging: false,
    });
  };

  render() {
    let button;
    if (this.state.isLoggedIn) {
      button = <Login onLogin={this.onLogin} />;
    } else {
      button = <Logout onLogout={this.onLogout} />;
    }
    return <div>{this.state.isLogging ? <Spinner size={20} /> : button}</div>;
  }
}

export default Auth;

      // <>
      //   {this.state.isLoggedIn ? (
      //     <Logout onLogout={this.onLogout} />
      //   ) : (
      //     <Login onLogin={this.onLogin} />
      //   )}
      //   {<Spinner size={20} />}
      // </>

