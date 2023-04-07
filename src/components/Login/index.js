// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {Component} from 'react'
import './index.css'

class Login extends Component {
  state = {username: 'rahul', password: 'rahul@2021'}

  onLoginSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    const {history} = this.props
    history.replace('/')
  }

  componentDidMount = () => {
    this.getData()
  }

  getData = async () => {
    const url = 'https://apis.ccbp.in/login'
    const {username, password} = this.state
    const userDetails = {username, password}
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, option)
    const data = await response.json()
    if (response.ok === true) {
      this.onLoginSuccess(data.jwt_token)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="login-container">
        <h1>Please Login</h1>
        <button type="button">Login with sample Creds</button>
      </div>
    )
  }
}

export default Login
