import {withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {FaFireAlt} from 'react-icons/fa'
import {FiSave} from 'react-icons/fi'
import {IoGameController} from 'react-icons/io5'
import {ImCancelCircle} from 'react-icons/im'

import DarkModeContext from '../../Context/darkModeContext'
import {
  RouterLink,
  NavMenuContainer,
  NavMenuList,
  NavMenuListItem,
  ListItemText,
  ListItemIcon,
  CancelButton,
} from './styledComponents'

const NavMenuOnPopup = props => {
  const {location, trending, close} = props
  const {pathname} = location

  return (
    <DarkModeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <NavMenuContainer trending={trending} isDark={isDark}>
            <CancelButton data-testid="close" onClick={close}>
              <ImCancelCircle color={isDark ? '#fff' : '#000'} size="20" />
            </CancelButton>
            <NavMenuList>
              <RouterLink to="/" onClick={close}>
                <NavMenuListItem isDark={isDark} isActive={pathname === '/'}>
                  <ListItemIcon
                    isDark={isDark}
                    as={AiFillHome}
                    isActive={pathname === '/'}
                  />
                  <ListItemText isDark={isDark}>Home</ListItemText>
                </NavMenuListItem>
              </RouterLink>
              <RouterLink to="/trending" onClick={close}>
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
              <RouterLink to="/gaming" onClick={close}>
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
              <RouterLink to="/saved-videos" onClick={close}>
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
          </NavMenuContainer>
        )
      }}
    </DarkModeContext.Consumer>
  )
}

export default withRouter(NavMenuOnPopup)
