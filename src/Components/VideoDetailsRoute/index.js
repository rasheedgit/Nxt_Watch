import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineAppstoreAdd,
} from 'react-icons/ai'

import DarkModeContext from '../../Context/darkModeContext'
import SavedVideosContext from '../../Context/savedVideosContext'

import Header from '../Header'
import {
  HomeContainer,
  VideosContent,
  FlexColumn,
  FailureImage,
  FailureTitle,
  FailureDescription,
  FailureRetry,
} from '../HomeRoute/styledComponents'
import {
  VideoContentContainer,
  VideoInfoContainer,
  VideoTitle,
  FlexRow,
  GrayText,
  Icons,
  IconsButton,
  Line,
  FlexRowTwo,
  ChannelLogo,
  ChannelName,
  Description,
} from './styledComponents'
import DesktopNavMenu from '../DesktopNavMenu'

const apiStatusConstance = {
  INITIAL: 'INITIAL',
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
}

class VideoDetailsRoute extends Component {
  state = {
    apiStatus: apiStatusConstance.INITIAL,
    videoDetails: {},
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideosList()
  }

  getVideosList = async () => {
    this.setState({apiStatus: apiStatusConstance.LOADING})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
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
          id: data.video_details.id,
          title: data.video_details.title,
          videoUrl: data.video_details.video_url,
          thumbnailUrl: data.video_details.thumbnail_url,
          channel: {
            name: data.video_details.channel.name,
            profileImageUrl: data.video_details.channel.profile_image_url,
            subscriberCount: data.video_details.channel.subscriber_count,
          },
          viewCount: data.video_details.view_count,
          publishedAt: data.video_details.published_at,
          description: data.video_details.description,
        }

        this.setState({
          apiStatus: apiStatusConstance.SUCCESS,
          videoDetails: formattedData,
        })
      } else {
        this.setState({apiStatus: apiStatusConstance.FAILURE})
      }
    } catch (err) {
      this.setState({apiStatus: apiStatusConstance.FAILURE})
      console.log(err)
    }
  }

  onLike = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: prevState.isLiked ? prevState.isDisliked : false,
    }))
  }

  onDislike = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: prevState.isDisliked ? prevState.isLiked : false,
    }))
  }

  loadingView = () => (
    <FlexColumn data-testid="loader">
      <Loader type="ThreeDots" color="#0000FF" height="50" width="50" />
    </FlexColumn>
  )

  successView = isDark => {
    const {videoDetails, isDisliked, isLiked} = this.state
    const {
      id,
      title,
      videoUrl,
      channel,
      viewCount,
      publishedAt,
      description,
    } = videoDetails
    const {name, profileImageUrl, subscriberCount} = channel
    const timeAgo = formatDistanceToNow(new Date(publishedAt)).split(' ')
    return (
      <SavedVideosContext.Consumer>
        {value => {
          const {savedVideos, addVideo, removeVideo} = value
          const isVideoSaved = savedVideos.find(eachItem => eachItem.id === id)
          const onClickSaveButton = () => {
            if (isVideoSaved) {
              removeVideo(id)
            } else {
              addVideo(videoDetails)
            }
          }
          return (
            <VideoContentContainer>
              <ReactPlayer width="100%" controls url={videoUrl} />
              <VideoInfoContainer>
                <VideoTitle isDark={isDark}>{title}</VideoTitle>
                <FlexRow width="100%">
                  <FlexRow width="160px">
                    <GrayText size="14px" right="10px">
                      {viewCount} views
                    </GrayText>
                    <GrayText size="14px" right="10px">
                      {timeAgo[1]} {timeAgo[2]} ago
                    </GrayText>
                  </FlexRow>
                  <FlexRow>
                    <IconsButton onClick={this.onLike}>
                      <Icons isActive={isLiked} as={AiOutlineLike} />
                      <GrayText isActive={isLiked} size="16px" right="20px">
                        Like
                      </GrayText>
                    </IconsButton>
                    <IconsButton onClick={this.onDislike}>
                      <Icons isActive={isDisliked} as={AiOutlineDislike} />
                      <GrayText isActive={isDisliked} size="16px" right="30px">
                        Dislike
                      </GrayText>
                    </IconsButton>
                    <IconsButton onClick={onClickSaveButton}>
                      <Icons
                        isActive={isVideoSaved}
                        as={AiOutlineAppstoreAdd}
                      />
                      <GrayText
                        isActive={isVideoSaved}
                        size="16px"
                        right="20px"
                      >
                        Save{`${isVideoSaved ? 'd' : ''}`}
                      </GrayText>
                    </IconsButton>
                  </FlexRow>
                </FlexRow>
                <Line />
                <FlexRowTwo>
                  <ChannelLogo src={profileImageUrl} alt="channel logo" />
                  <div>
                    <ChannelName isDark={isDark}>{name}</ChannelName>
                    <GrayText size="14px">
                      {subscriberCount} subscribers
                    </GrayText>
                    <Description isDark={isDark}>{description}</Description>
                  </div>
                </FlexRowTwo>
              </VideoInfoContainer>
            </VideoContentContainer>
          )
        }}
      </SavedVideosContext.Consumer>
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
            <HomeContainer isDark={isDark}>
              <Header />
              <DesktopNavMenu />
              <VideosContent isDark={isDark}>
                {this.renderViews(isDark)}
              </VideosContent>
            </HomeContainer>
          )
        }}
      </DarkModeContext.Consumer>
    )
  }
}

export default VideoDetailsRoute
