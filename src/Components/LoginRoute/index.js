import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import DarkModeContext from '../../Context/darkModeContext'
import {
  LoginContainer,
  LoginForm,
  WebsiteLogo,
  InputLabel,
  InputField,
  CheckboxContainer,
  CheckboxLabel,
  LoginButton,
  ErrorMessage,
  UserValue,
} from './styledComponents'

class LoginRoute extends Component {
  state = {
    showPassword: false,
    username: '',
    password: '',
    isError: false,
    errorMessage: '',
  }

  onLoginSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const loginApiUrl = 'https://apis.ccbp.in/login'
    const jsonBody = JSON.stringify({username, password})
    const option = {
      method: 'POST',
      body: jsonBody,
    }

    try {
      const response = await fetch(loginApiUrl, option)
      const data = await response.json()

      if (response.ok === true) {
        const jwtToken = data.jwt_token
        Cookies.set('jwt_token', jwtToken, {expires: 30})
        const {history} = this.props
        history.replace('/')
      } else {
        this.setState({isError: true, errorMessage: data.error_msg})
      }
    } catch (err) {
      console.log(err)
    }
  }

  handleShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  handleInput = event => {
    this.setState({[event.target.id]: event.target.value})
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    const {showPassword, username, password, isError, errorMessage} = this.state

    return (
      <DarkModeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <LoginContainer isDark={isDark}>
              <LoginForm isDark={isDark} onSubmit={this.onLoginSubmit}>
                <WebsiteLogo
                  src={
                    isDark
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <InputLabel isDark={isDark} htmlFor="username">
                  USERNAME <UserValue>rahul</UserValue>
                </InputLabel>
                <InputField
                  id="username"
                  value={username}
                  onChange={this.handleInput}
                  type="text"
                  placeholder="Username"
                  isDark={isDark}
                />
                <InputLabel isDark={isDark} htmlFor="password">
                  PASSWORD <UserValue>rahul@2021</UserValue>
                </InputLabel>
                <InputField
                  id="password"
                  value={password}
                  onChange={this.handleInput}
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  isDark={isDark}
                />
                <CheckboxContainer>
                  <input
                    onChange={this.handleShowPassword}
                    checked={showPassword}
                    id="checkbox"
                    type="checkbox"
                  />
                  <CheckboxLabel isDark={isDark} htmlFor="checkbox">
                    Show Password
                  </CheckboxLabel>
                </CheckboxContainer>
                <LoginButton type="submit">Login</LoginButton>
                {isError && <ErrorMessage>*{errorMessage}</ErrorMessage>}
              </LoginForm>
            </LoginContainer>
          )
        }}
      </DarkModeContext.Consumer>
    )
  }
}

export default LoginRoute
