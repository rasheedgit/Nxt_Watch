import styled from 'styled-components'

export const GameItem = styled.li`
  width: 100%;
`

export const GameImage = styled.img`
  width: 100%;
  margin-bottom: 5px;
`
export const GameTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  font-family: Roboto;
  margin: 5px 0;
  color: ${({isDark}) => (isDark ? '#fff' : '#000')};
`
export const GameSubTitles = styled.p`
  color: gray;
  margin: 0;
  font-size: 14px;
  width: 80%;
  font-family: Roboto;
  line-height: 1.6;
`
