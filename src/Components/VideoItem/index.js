import {formatDistanceToNow} from 'date-fns'
import {
  VideoLink,
  ListItem,
  VideoThumbnail,
  FlexRow,
  ChannelLogo,
  FlexColumn,
  VideoTitle,
  List,
  VideoListItem,
} from './styledComponents'
import DarkModeContext from '../../Context/darkModeContext'

const VideoItem = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    channel,
    viewCount,
    publishedAt,
  } = videoDetails
  const {name, profileImageUrl} = channel
  const timeAgo = formatDistanceToNow(new Date(publishedAt)).split(' ')
  return (
    <DarkModeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <VideoLink to={`/videos/${id}`}>
            <ListItem>
              <VideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <FlexRow>
                <ChannelLogo src={profileImageUrl} alt="channel logo" />
                <FlexColumn>
                  <VideoTitle isDark={isDark}>{title}</VideoTitle>
                  <List>
                    <li>
                      <VideoListItem>{name}</VideoListItem>
                    </li>
                    <li>
                      <VideoListItem>{viewCount} views</VideoListItem>
                    </li>
                    <li>
                      <VideoListItem>
                        {timeAgo[1]} {timeAgo[2]} ago
                      </VideoListItem>
                    </li>
                  </List>
                </FlexColumn>
              </FlexRow>
            </ListItem>
          </VideoLink>
        )
      }}
    </DarkModeContext.Consumer>
  )
}

export default VideoItem
