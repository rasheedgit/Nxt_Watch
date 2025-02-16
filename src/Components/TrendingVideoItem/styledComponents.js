import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoLink = styled(Link)`
  color: inherit;
  text-decoration: inherit;
  width: 100%;
`
export const ListItem = styled.li`
  width: 100%;

  @media (min-width: 576px) {
    display: flex;
  }
`
export const VideoThumbnail = styled.img`
  width: 100%;
  margin-bottom: 10px;

  @media (min-width: 576px) {
    width: 60%;
    margin-right: 20px;
  }
`
export const FlexRow = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
`
export const ChannelLogo = styled.img`
  width: 40px;
  margin: 0 10px 0 10px;

  @media (min-width: 576px) {
    display: none;
  }
`
export const FlexColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const VideoTitle = styled.p`
  font-size: 14px;
  font-family: Roboto;
  font-weight: 500;
  margin: 0;
  margin-bottom: 10px;
  line-height: 1.7;
  color: ${({isDark}) => (isDark ? '#fff' : '#000')};

  @media (min-width: 576px) {
    font-size: 17px;
  }
`
export const List = styled.ul`
  margin: 0;
  display: flex;
  align-items: center;
  list-style: none;
  color: #414c66;
  padding: 0;
  gap: 20px;
`
export const VideoListItem = styled.li`
  margin: 0;
  font-size: 12px;
  font-family: Roboto;
  color: gray;

  @media (min-width: 576px) {
    font-size: 14px;
  }
`
