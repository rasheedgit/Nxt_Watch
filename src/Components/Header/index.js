import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import {CgDarkMode} from 'react-icons/cg'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'

import './index.css'

import DarkModeContext from '../../Context/darkModeContext'
import {RouterLink} from '../DesktopNavMenu/styledComponents'
import {
  HeaderContainer,
  WebsiteLogo,
  MobileNavList,
  MobileNavItem,
  MobileNavIcons,
  MobileNavButton,
  DesktopNavList,
  DesktopNavItem,
  DesktopNavIcons,
  DesktopNavButton,
  DesktopLogoutButton,
  DesktopNavProfile,
  LogoutPopup,
  LogoutPopupDescription,
  FlexRow,
  LogoutPopupButton,
} from './styledComponents'

import NavMenuOnPopup from '../NavMenuOnPopup'

class Header extends Component {
  onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    return (
      <DarkModeContext.Consumer>
        {value => {
          const {isDark, toggleDarkMode} = value
          return (
            <HeaderContainer isDark={isDark}>
              <RouterLink to="/">
                <WebsiteLogo
                  src={
                    isDark
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
              </RouterLink>
              <MobileNavList className="mobile-nav-list">
                <MobileNavItem>
                  <MobileNavButton data-testid="theme" onClick={toggleDarkMode}>
                    <MobileNavIcons as={CgDarkMode} isDark={isDark} />
                  </MobileNavButton>
                </MobileNavItem>
                <MobileNavItem>
                  <Popup
                    modal
                    trigger={
                      <MobileNavButton>
                        <MobileNavIcons as={GiHamburgerMenu} isDark={isDark} />
                      </MobileNavButton>
                    }
                    className="popup-content"
                  >
                    {close => <NavMenuOnPopup close={close} />}
                  </Popup>
                </MobileNavItem>
                <MobileNavItem>
                  <Popup
                    modal
                    trigger={
                      <MobileNavButton>
                        <MobileNavIcons as={FiLogOut} isDark={isDark} />
                      </MobileNavButton>
                    }
                    className="popup-content"
                  >
                    {close => (
                      <LogoutPopup isDark={isDark}>
                        <LogoutPopupDescription isDark={isDark}>
                          Are you sure you want to logout?
                        </LogoutPopupDescription>
                        <FlexRow>
                          <LogoutPopupButton onClick={close}>
                            Cancel
                          </LogoutPopupButton>
                          <LogoutPopupButton solid onClick={this.onClickLogout}>
                            Confirm
                          </LogoutPopupButton>
                        </FlexRow>
                      </LogoutPopup>
                    )}
                  </Popup>
                </MobileNavItem>
              </MobileNavList>

              <DesktopNavList className="mobile-nav-list">
                <DesktopNavItem>
                  <DesktopNavButton onClick={toggleDarkMode}>
                    <DesktopNavIcons as={CgDarkMode} isDark={isDark} />
                  </DesktopNavButton>
                </DesktopNavItem>
                <DesktopNavItem>
                  <DesktopNavButton>
                    <DesktopNavProfile
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                      alt="profile"
                    />
                  </DesktopNavButton>
                </DesktopNavItem>
                <DesktopNavItem>
                  <Popup
                    modal
                    trigger={
                      <DesktopLogoutButton isDark={isDark}>
                        Logout
                      </DesktopLogoutButton>
                    }
                    className="popup-content"
                  >
                    {close => (
                      <LogoutPopup isDark={isDark}>
                        <LogoutPopupDescription isDark={isDark}>
                          Are you sure you want to logout?
                        </LogoutPopupDescription>
                        <FlexRow>
                          <LogoutPopupButton onClick={close}>
                            Cancel
                          </LogoutPopupButton>
                          <LogoutPopupButton solid onClick={this.onClickLogout}>
                            Confirm
                          </LogoutPopupButton>
                        </FlexRow>
                      </LogoutPopup>
                    )}
                  </Popup>
                </DesktopNavItem>
              </DesktopNavList>
            </HeaderContainer>
          )
        }}
      </DarkModeContext.Consumer>
    )
  }
}
export default withRouter(Header)
