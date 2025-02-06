import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import DarkModeContext from './Context/darkModeContext'

import Login from './Components/Login'
import NotFound from './Components/NotFound'
import Home from './Components/Home'
import ProtectedRoute from './Components/ProtectedRoute'

import './App.css'

class App extends Component {
  state = {
    isDark: false,
  }

  toggleDarkMode = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    const {isDark} = this.state
    return (
      <DarkModeContext.Provider
        value={{
          isDark,
          toggleDarkMode: this.toggleDarkMode,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </DarkModeContext.Provider>
    )
  }
}
export default App
