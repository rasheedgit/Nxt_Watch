import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {ImCancelCircle} from 'react-icons/im'
import {FiSearch} from 'react-icons/fi'
import DarkModeContext from '../../Context/darkModeContext'

import Header from '../Header'
import VideoItem from '../VideoItem'
import {
  HomeContainer,
  PremiumContainer,
  WebsiteLogo,
  PremiumDescription,
  PremiumButton,
  CancelPremiumButton,
  VideosContent,
  SearchContainer,
  SearchInput,
  SearchButton,
  SearchIcon,
  FlexColumn,
  FailureImage,
  FailureTitle,
  FailureDescription,
  FailureRetry,
  VideoList,
} from '../HomeRoute/styledComponents'
import DesktopNavMenu from '../DesktopNavMenu'

const apiStatusConstance = {
  INITIAL: 'INITIAL',
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
}

class SavedVideosRoute extends Component {
  state = {
    showPremium: true,
    searchQuery: '',
    apiStatus: apiStatusConstance.INITIAL,
    videosData: {total: 0},
  }

  componentDidMount() {
    this.getVideosList()
  }

  getVideosList = async () => {
    this.setState({apiStatus: apiStatusConstance.LOADING})
    const {searchQuery} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchQuery}`
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

  cancelShowPremium = () => this.setState({showPremium: false})

  changeSearchQuery = event => this.setState({searchQuery: event.target.value})

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
      <VideoList>
        {videosData.videos.map(eachItem => (
          <VideoItem key={eachItem.id} videoDetails={eachItem} />
        ))}
      </VideoList>
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
    const {showPremium} = this.state

    return (
      <DarkModeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <HomeContainer isDark={isDark}>
              <Header />
              <DesktopNavMenu />

              {showPremium && (
                <PremiumContainer>
                  <CancelPremiumButton
                    onClick={this.cancelShowPremium}
                    type="button"
                  >
                    <ImCancelCircle size="16" />
                  </CancelPremiumButton>
                  <WebsiteLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="website logo"
                  />
                  <PremiumDescription>
                    Buy Nxt Watch Premium prepaid plans with UPI
                  </PremiumDescription>
                  <PremiumButton type="button">GET IT NOW</PremiumButton>
                </PremiumContainer>
              )}

              <VideosContent isDark={isDark}>
                <SearchContainer isDark={isDark}>
                  <SearchInput
                    type="search"
                    placeholder="Search"
                    isDark={isDark}
                    onChange={this.changeSearchQuery}
                  />
                  <SearchButton
                    type="button"
                    onClick={this.getVideosList}
                    isDark={isDark}
                  >
                    <SearchIcon as={FiSearch} />
                  </SearchButton>
                </SearchContainer>

                {this.renderViews(isDark)}
              </VideosContent>
            </HomeContainer>
          )
        }}
      </DarkModeContext.Consumer>
    )
  }
}

export default SavedVideosRoute
