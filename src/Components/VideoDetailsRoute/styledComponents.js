import styled from 'styled-components'

export const VideoContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 576px) {
    padding: 20px;
  }
`
export const VideoInfoContainer = styled.div`
  width: 90%;

  @media (min-width: 576px) {
    width: 100%;
  }
`
export const VideoTitle = styled.p`
  color: ${({isDark}) => (isDark ? '#fff' : '#000')};
  font-size: 18px;
  font-family: Roboto;
  font-weight: bold;
  line-height: 1.6;
  margin-bottom: 20px;
`
export const FlexRow = styled.div`
  width: ${({width}) => width};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 5px;
`
export const GrayText = styled.p`
  color: ${({isActive}) => (isActive ? '#2563eb' : '#64748b')};
  font-size: ${({size}) => size};
  font-family: Roboto;
  margin: 10px 0;
  margin-right: ${({right}) => right};
`
export const Icons = styled.div`
  font-size: 24px;
  color: ${({isActive}) => (isActive ? '#2563eb' : '#64748b')};
  margin-right: 5px;
`
export const IconsButton = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  background: transparent;
  display: flex;
  align-items: center;
`
export const Line = styled.hr`
  width: 100%;
  border-color: gray;
  margin-bottom: 20px;
`
export const FlexRowTwo = styled.div`
  width: 100%;
  display: flex;
`
export const ChannelLogo = styled.img`
  width: 50px;
  margin-right: 20px;
  align-self: flex-start;
`
export const ChannelName = styled.p`
  color: ${({isDark}) => (isDark ? '#fff' : '#000')};
  font-size: 16px;
  font-family: Roboto;
  font-weight: bold;
  margin: 0 0 10px 0;
`
export const Description = styled.p`
  color: ${({isDark}) => (isDark ? '#fff' : '#000')};
  font-size: 14px;
  font-family: Roboto;
  margin: 30px 0;
  line-height: 1.6;
`
