import {withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {FaFireAlt} from 'react-icons/fa'
import {FiSave} from 'react-icons/fi'
import {IoGameController} from 'react-icons/io5'

import DarkModeContext from '../../Context/darkModeContext'
import {
  RouterLink,
  NavMenuContainer,
  NavMenuList,
  NavMenuListItem,
  ListItemText,
  ListItemIcon,
  ContactContainer,
  ContactTitle,
  FlexRow,
  MediaImage,
  ContactDescription,
} from './styledComponents'

const DesktopNavMenu = props => {
  const {location, trending} = props
  const {pathname} = location

  return (
    <DarkModeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <NavMenuContainer trending={trending} isDark={isDark}>
            <NavMenuList>
              <RouterLink to="/">
                <NavMenuListItem isDark={isDark} isActive={pathname === '/'}>
                  <ListItemIcon
                    isDark={isDark}
                    as={AiFillHome}
                    isActive={pathname === '/'}
                  />
                  <ListItemText isDark={isDark}>Home</ListItemText>
                </NavMenuListItem>
              </RouterLink>
              <RouterLink to="/trending">
                <NavMenuListItem
                  isDark={isDark}
                  isActive={pathname === '/trending'}
                >
                  <ListItemIcon
                    isDark={isDark}
                    as={FaFireAlt}
                    isActive={pathname === '/trending'}
                  />
                  <ListItemText isDark={isDark}>Trending</ListItemText>
                </NavMenuListItem>
              </RouterLink>
              <RouterLink to="/gaming">
                <NavMenuListItem
                  isDark={isDark}
                  isActive={pathname === '/gaming'}
                >
                  <ListItemIcon
                    isDark={isDark}
                    as={IoGameController}
                    isActive={pathname === '/gaming'}
                  />
                  <ListItemText isDark={isDark}>Gaming</ListItemText>
                </NavMenuListItem>
              </RouterLink>
              <RouterLink to="/saved-videos">
                <NavMenuListItem
                  isDark={isDark}
                  isActive={pathname === '/saved-videos'}
                >
                  <ListItemIcon
                    isDark={isDark}
                    as={FiSave}
                    isActive={pathname === '/saved-videos'}
                  />
                  <ListItemText isDark={isDark}>Saved videos</ListItemText>
                </NavMenuListItem>
              </RouterLink>
            </NavMenuList>

            <ContactContainer>
              <ContactTitle isDark={isDark}>CONTACT US</ContactTitle>
              <FlexRow>
                <MediaImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <MediaImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <MediaImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </FlexRow>
              <ContactDescription isDark={isDark}>
                Enjoy! Now to see your channels and recommendations!
              </ContactDescription>
            </ContactContainer>
          </NavMenuContainer>
        )
      }}
    </DarkModeContext.Consumer>
  )
}

export default withRouter(DesktopNavMenu)
