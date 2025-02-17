import styled from 'styled-components'

export const TrendingContainer = styled.div`
  height: 100vh;
  display: flex;
  overflow: auto;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  background: ${({isDark}) => (isDark ? '#181818' : '#F9F9F9')};

  @media (min-width: 992px) {
    padding-left: 260px;
  }
`

export const TrendingHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background: ${({isDark}) => (isDark ? '#181818' : '#F1F1F1')};
`

export const RouteHeaderIconContainer = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background: ${({isDark}) => (isDark ? '#0F0F0F' : '#E1E9F0')};
  margin: 20px;
`
export const RouteIcon = styled.div`
  font-size: 28px;
  color: red;
`
export const RouteTitle = styled.h1`
  color: ${({isDark}) => (isDark ? '#fff' : '#000')};
  font-size: 24px;
  font-family: Roboto;
`
export const TrendingVideoList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 15px;
  row-gap: 30px;
  justify-content: center;

  @media (min-width: 576px) {
    grid-template-columns: repeat(auto-fit, minmax(700px, 1fr));
    padding: 0 20px;
  }
`
