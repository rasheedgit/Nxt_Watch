import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavMenuContainer = styled.div`
  display: none;
  
  @media (min-width: ${({trending}) => (trending ? '992px' : '768px')}) {
    position: fixed;
    top: 80px;
    left: 0;
    width: 260px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${({isDark}) => (isDark ? '#212121' : '#fff')};
    padding-bottom: 80px;
  }
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

export const ContactContainer = styled.div`
  padding-left: 20px;
`

export const ContactTitle = styled.p`
  color: ${({isDark}) => (isDark ? '#fff' : '#3c5a79')};
  font-size: 16px;
  font-family: Roboto;
  font-weight: bold;
  margin-bottom: 20px;
`

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

export const MediaImage = styled.img`
  width: 40px;
  margin-right: 10px;
  margin-bottom: 15px;
`

export const ContactDescription = styled.p`
  color: ${({isDark}) => (isDark ? '#fff' : '#3c5a79')};
  font-size: 16px;
  font-family: Roboto;
  font-weight: bold;
  line-height: 1.8;
  width: 80%
`
