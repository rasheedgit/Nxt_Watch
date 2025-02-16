import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: ${({isDark}) => (isDark ? '#212121' : '#fff')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 5%;
  padding-right: 5%;
`
export const WebsiteLogo = styled.img`
  width: 120px;
`
export const MobileNavList = styled.ul`
  list-style: none;
  padding-left: 0%;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`
export const MobileNavItem = styled.li`
  margin: 0 10px;
`
export const MobileNavButton = styled.button`
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
export const MobileNavIcons = styled.div`
  color: ${({isDark}) => (isDark ? '#fff' : '#000')};
  font-size: 24px;
`
export const DesktopNavList = styled.ul`
  display: none;

  @media (min-width: 768px) {
    list-style: none;
    padding-left: 0%;
    display: flex;
    align-items: center;
  }
`
export const DesktopNavItem = styled.li`
  margin: 0 15px;
`
export const DesktopNavButton = styled.button`
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
export const DesktopLogoutButton = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  color: ${({isDark}) => (isDark ? '#fff' : '#1394DD')};
  font-weight: bold;
  border: solid 2px ${({isDark}) => (isDark ? '#fff' : '#1394DD')};
  padding: 8px 15px;
`
export const DesktopNavIcons = styled.div`
  color: ${({isDark}) => (isDark ? '#fff' : '#000')};
  font-size: 30px;
`
export const DesktopNavProfile = styled.img`
  width: 30px;
`
export const LogoutPopup = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({isDark}) => (isDark ? '#212121' : '#fff')};
  border-radius: 10px;
  padding: 30px 30px;

  @media (min-width: 768px) {
    width: 450px;
  }
`

export const LogoutPopupDescription = styled.p`
  font-size: 18px;
  font-family: Roboto;
  color: ${({isDark}) => (isDark ? '#fff' : '#1A487D')};
  margin-bottom: 40px;
`
export const FlexRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`
export const LogoutPopupButton = styled.button`
  border-style: ${({solid}) => (solid ? 'none' : 'solid')};
  background: ${({solid}) => (solid ? '#2082F2' : 'transparent')};
  color: ${({solid}) => (solid ? '#fff' : '#8392A4')};
  border-color: ${({solid}) => (solid ? '' : '#8392A4')};
  font-size: 16px;
  font-family: Roboto;
  width: 100px;
  height: 40px;
  padding: 0;
  margin: 0;
  border-radius: 3px;
`
