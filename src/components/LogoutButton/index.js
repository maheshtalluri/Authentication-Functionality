// Write your JS code here
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

import './index.css'

const LogoutButton = props => {
  const logoutBtn = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <button type="button" onClick={logoutBtn}>
      Logout
    </button>
  )
}

export default withRouter(LogoutButton)
