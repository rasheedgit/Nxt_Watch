import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavMenuContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({isDark}) => (isDark ? '#212121' : '#fff')};
  padding-bottom: 80px;
`

export const NavMenuList = styled.ul`
  width: 100%;
  list-style: none;
  padding-left: 0%;
`

export const RouterLink = styled(Link)`
  color: inherit;
  text-decoration: inherit;
`

export const NavMenuListItem = styled.li`
  display: flex;
  align-items: center;
  background-color: ${({isDark, isActive}) => {
    if (isActive) {
      return isDark ? '#383838' : '#F1F5F9'
    }
    return 'transparent'
  }};
`

export const ListItemText = styled.p`
  font-size: 16px;
  margin: 15px 0;
  font-family: Roboto;
  color: ${({isDark}) => (isDark ? '#fff' : '#3d3d3d')};
`

export const ListItemIcon = styled.div`
  font-size: 22px;
  margin: 0 25px;
  color: ${({isActive}) => (isActive ? '#FF031C' : '#8F8C8E')};
`
export const CancelButton = styled.button`
  position: fixed;
  top: 30px;
  right: 30px;
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`
