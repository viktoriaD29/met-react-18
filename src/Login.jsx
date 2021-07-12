import React from 'react'

//input: obj
//output: jsx

const Login = (props) => {
  return <button className="login btn" onClick={props.onLogin}>Login</button>;
}

export default Login