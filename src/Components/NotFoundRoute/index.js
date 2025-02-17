import DarkModeContext from '../../Context/darkModeContext'

import Header from '../Header'
import {
  HomeContainer,
  FlexColumn,
  FailureImage,
  FailureTitle,
  FailureDescription,
} from '../HomeRoute/styledComponents'
import DesktopNavMenu from '../DesktopNavMenu'

const NotFoundRoute = () => (
  <DarkModeContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <HomeContainer data-testid="home" isDark={isDark}>
          <Header />
          <DesktopNavMenu />
          <FlexColumn>
            <FailureImage
              src={
                isDark
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
              }
              alt="not found"
            />
            <FailureTitle isDark={isDark}>Page Not Found </FailureTitle>
            <FailureDescription>
              We are sorry, the page you requested could not be found.
            </FailureDescription>
          </FlexColumn>
        </HomeContainer>
      )
    }}
  </DarkModeContext.Consumer>
)

export default NotFoundRoute
