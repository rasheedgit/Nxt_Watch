import {GameItem, GameImage, GameTitle, GameSubTitles} from './styledComponents'
import {RouterLink} from '../DesktopNavMenu/styledComponents'
import DarkModeContext from '../../Context/darkModeContext'

const GameItemCard = props => {
  const {gameDetails} = props
  const {id, title, thumbnailUrl, viewCount} = gameDetails
  return (
    <DarkModeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <RouterLink to={`videos/${id}`}>
            <GameItem>
              <GameImage src={thumbnailUrl} alt="video thumbnail" />
              <GameTitle isDark={isDark}>{title}</GameTitle>
              <GameSubTitles>{viewCount} Watching Worldwide</GameSubTitles>
            </GameItem>
          </RouterLink>
        )
      }}
    </DarkModeContext.Consumer>
  )
}

export default GameItemCard
