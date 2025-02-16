import {Component} from 'react'
import {FaFireAlt} from 'react-icons/fa'

import DarkModeContext from '../../Context/darkModeContext'
import SavedVideosContext from '../../Context/savedVideosContext'

import Header from '../Header'
import VideoItem from '../TrendingVideoItem'
import {
  VideosContent,
  FlexColumn,
  FailureImage,
  FailureTitle,
  FailureDescription,
} from '../HomeRoute/styledComponents'

import {
  TrendingContainer,
  TrendingHeader,
  RouteHeaderIconContainer,
  RouteTitle,
  RouteIcon,
  TrendingVideoList,
} from '../TrendingRoute/styledComponents'
import DesktopNavMenu from '../DesktopNavMenu'

class TrendingRoute extends Component {
  noVideoFound = isDark => (
    <FlexColumn>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <FailureTitle isDark={isDark}>No saved videos found</FailureTitle>
      <FailureDescription>
        You can save your videos while watching them
      </FailureDescription>
    </FlexColumn>
  )

  successView = isDark => (
    <SavedVideosContext.Consumer>
      {value => {
        const {savedVideos} = value
        if (savedVideos.length === 0) {
          return this.noVideoFound(isDark)
        }

        return (
          <TrendingVideoList>
            {savedVideos.map(eachItem => (
              <VideoItem key={eachItem.id} videoDetails={eachItem} />
            ))}
          </TrendingVideoList>
        )
      }}
    </SavedVideosContext.Consumer>
  )

  render() {
    return (
      <DarkModeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <TrendingContainer isDark={isDark}>
              <Header />
              <DesktopNavMenu trending />
              <TrendingHeader isDark={isDark}>
                <RouteHeaderIconContainer isDark={isDark}>
                  <RouteIcon as={FaFireAlt} />
                </RouteHeaderIconContainer>
                <RouteTitle isDark={isDark}>Saved videos</RouteTitle>
              </TrendingHeader>
              <VideosContent isDark={isDark}>
                {this.successView(isDark)}
              </VideosContent>
            </TrendingContainer>
          )
        }}
      </DarkModeContext.Consumer>
    )
  }
}

export default TrendingRoute
