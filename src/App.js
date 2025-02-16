import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import DarkModeContext from './Context/darkModeContext'
import SavedVideosContext from './Context/savedVideosContext'

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
    savedVideos: [],
  }

  addVideo = videoDetails =>
    this.setState(prevState => ({
      savedVideos: [...prevState.savedVideos, videoDetails],
    }))

  removeVideo = id => {
    this.setState(prevState => ({
      savedVideos: prevState.savedVideos.filter(eachItem => eachItem.id !== id),
    }))
  }

  toggleDarkMode = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    const {isDark, savedVideos} = this.state
    return (
      <SavedVideosContext.Provider
        value={{
          savedVideos,
          addVideo: this.addVideo,
          removeVideo: this.removeVideo,
        }}
      >
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
      </SavedVideosContext.Provider>
    )
  }
}
export default App
