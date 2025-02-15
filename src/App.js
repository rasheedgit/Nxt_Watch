import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import DarkModeContext from './Context/darkModeContext'

import LoginRoute from './Components/LoginRoute'
import NotFoundRoute from './Components/NotFoundRoute'
import HomeRoute from './Components/HomeRoute'
import ProtectedRoute from './Components/ProtectedRoute'
import TrendingRoute from './Components/TrendingRoute'
import GamingRoute from './Components/GamingRoute'
import SavedVideosRoute from './Components/SavedVideosRoute'
import VideoDetailsRoute from './Components/VideoDetailsRoute'

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
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={HomeRoute} />

          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideosRoute}
          />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoDetailsRoute}
          />

          <Route exact path="/not-found" component={NotFoundRoute} />
          <Redirect to="/not-found" />
        </Switch>
      </DarkModeContext.Provider>
    )
  }
}
export default App
