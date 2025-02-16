import styled from 'styled-components'

export const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  overflow: auto;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  background: ${({isDark}) => (isDark ? '#181818' : '#F9F9F9')};

  @media (min-width: 768px) {
    padding-left: 260px;
  }
`

export const PremiumContainer = styled.div`
  width: 100%;
  padding: 10px;
  background: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  padding-right: 20px;

  @media (min-width: 576px) {
    padding: 30px;
    padding-right: 60px;
  }
`

export const CancelPremiumButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  align-self: flex-end;
  cursor: pointer;
`

export const WebsiteLogo = styled.img`
  width: 150px;
`

export const PremiumDescription = styled.p`
  font-size: 16px;
  font-family: Roboto;
  color: #27292e;
  line-height: 1.7;
  margin-top: 10px;
  max-width: 250px;

  @media (min-width: 768px) {
    font-size: 20px;
    max-width: 400px;
    margin-top: 15px;
  }
`

export const PremiumButton = styled.button`
  background: transparent;
  border: solid 2px #000;
  color: #000;
  font-size: 16px;
  font-family: Roboto;
  padding: 10px 20px;
  align-self: flex-start;
  cursor: pointer;
`
export const VideosContent = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({isDark}) => (isDark ? '#000' : '')};
  padding-top: 10px;
`
export const SearchContainer = styled.div`
  width: 95%;
  max-width: 500px;
  height: 40px;
  display: flex;
  align-items: center;
  border: solid 2px ${({isDark}) => (isDark ? '#2C2C2C' : '#DADADA')};
  background: ${({isDark}) => (isDark ? '#181818' : '#fff')};
  margin: 20px;

  @media (min-width: 576px) {
    width: 55%;
    max-width: none;
    align-self: flex-start;
  }
`
export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0 12px;
  font-size: 16px;
  font-family: Roboto;
  color: ${({isDark}) => (isDark ? '#fff' : '#000')};
  background: transparent;
`
export const SearchButton = styled.button`
  width: 20%;
  height: 100%;
  background: ${({isDark}) => (isDark ? '#303031' : '#F4F4F4')};
  border: none;
  outline: none;
  cursor: pointer;
  border-left: solid 2px ${({isDark}) => (isDark ? '#2C2C2C' : '#DADADA')};
`
export const SearchIcon = styled.div`
  color: gray;
  font-size: 18px;
`
export const FlexColumn = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
`
export const FailureImage = styled.img`
  width: 70%;
  max-width: 400px;
`
export const FailureTitle = styled.h1`
  color: ${({isDark}) => (isDark ? '#fff' : '#00306e')};
  font-family: Roboto;
  text-align: center;
  font-size: 20px;

  @media (min-width: 768px) {
    font-size: 30px;
    margin-bottom: 10px;
  }
`
export const FailureDescription = styled.p`
  color: #5a7b97;
  font-family: Roboto;
  text-align: center;
  font-size: 16px;
  width: 80%;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`
export const FailureRetry = styled.button`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  font-family: Roboto;
  padding: 10px 30px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  background: #4a47e0;
`
export const VideoList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 15px;
  row-gap: 30px;
  justify-content: center;

  @media (min-width: 576px) {
    padding: 0 20px;
  }
`
