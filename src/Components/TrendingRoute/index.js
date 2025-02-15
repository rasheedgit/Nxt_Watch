import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {FaFireAlt} from 'react-icons/fa'
import DarkModeContext from '../../Context/darkModeContext'

import Header from '../Header'
import VideoItem from '../TrendingVideoItem'
import {
  VideosContent,
  FlexColumn,
  FailureImage,
  FailureTitle,
  FailureDescription,
  FailureRetry,
} from '../HomeRoute/styledComponents'

import {
  TrendingContainer,
  TrendingHeader,
  RouteHeaderIconContainer,
  RouteTitle,
  RouteIcon,
  TrendingVideoList,
} from './styledComponents'
import DesktopNavMenu from '../DesktopNavMenu'

const apiStatusConstance = {
  INITIAL: 'INITIAL',
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
}

class TrendingRoute extends Component {
  state = {
    apiStatus: apiStatusConstance.INITIAL,
    videosData: {total: 0},
  }

  componentDidMount() {
    this.getVideosList()
  }

  getVideosList = async () => {
    this.setState({apiStatus: apiStatusConstance.LOADING})

    const apiUrl = `https://ais.ccbp.in/videos/trending`
    const jwtToken = Cookies.get('jwt_token')
    const option = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    try {
      const response = await fetch(apiUrl, option)
      const data = await response.json()

      if (response.ok === true) {
        const formattedData = {
          total: data.total,
          videos: data.videos.map(eachItem => ({
            channel: {
              name: eachItem.channel.name,
              profileImageUrl: eachItem.channel.profile_image_url,
            },
            id: eachItem.id,
            publishedAt: eachItem.published_at,
            thumbnailUrl: eachItem.thumbnail_url,
            title: eachItem.title,
            viewCount: eachItem.view_count,
          })),
        }

        this.setState({
          apiStatus: apiStatusConstance.SUCCESS,
          videosData: formattedData,
        })
      } else {
        this.setState({apiStatus: apiStatusConstance.FAILURE})
      }
    } catch (err) {
      this.setState({apiStatus: apiStatusConstance.FAILURE})
      console.log(err)
    }
  }

  loadingView = () => (
    <FlexColumn data-testid="loader">
      <Loader type="ThreeDots" color="#0000FF" height="50" width="50" />
    </FlexColumn>
  )

  noVideoFound = isDark => (
    <FlexColumn>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <FailureTitle isDark={isDark}>No Search results found</FailureTitle>
      <FailureDescription>
        Try different key words or remove search filter
      </FailureDescription>
      <FailureRetry onClick={this.getVideosList} type="button">
        Retry
      </FailureRetry>
    </FlexColumn>
  )

  successView = isDark => {
    const {videosData} = this.state
    if (videosData.total === 0) {
      return this.noVideoFound(isDark)
    }

    return (
      <TrendingVideoList>
        {videosData.videos.map(eachItem => (
          <VideoItem key={eachItem.id} videoDetails={eachItem} />
        ))}
      </TrendingVideoList>
    )
  }

  failureView = isDark => (
    <FlexColumn>
      <FailureImage
        src={
          isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="failure view"
      />
      <FailureTitle isDark={isDark}>Oops! Something Went Wrong</FailureTitle>
      <FailureDescription>
        We are having some trouble to complete your request. Please try again.
      </FailureDescription>
      <FailureRetry onClick={this.getVideosList} type="button">
        Retry
      </FailureRetry>
    </FlexColumn>
  )

  renderViews = isDark => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstance.LOADING:
        return this.loadingView()
      case apiStatusConstance.SUCCESS:
        return this.successView(isDark)
      case apiStatusConstance.FAILURE:
        return this.failureView(isDark)
      default:
        return null
    }
  }

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
                <RouteTitle isDark={isDark}>Trending</RouteTitle>
              </TrendingHeader>
              <VideosContent isDark={isDark}>
                {this.renderViews(isDark)}
              </VideosContent>
            </TrendingContainer>
          )
        }}
      </DarkModeContext.Consumer>
    )
  }
}

export default TrendingRoute
