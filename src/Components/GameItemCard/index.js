import {GameItem, GameImage, GameTitle, GameSubTitles} from './styledComponents'
import DarkModeContext from '../../Context/darkModeContext'

const GameItemCard = props => {
  const {gameDetails} = props
  // const {id} = gameDetails
  const {title, thumbnailUrl, viewCount} = gameDetails
  return (
    <DarkModeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <GameItem>
            <GameImage src={thumbnailUrl} alt="game" />
            <GameTitle isDark={isDark}>{title}</GameTitle>
            <GameSubTitles>{viewCount} Watching Worldwide</GameSubTitles>
          </GameItem>
        )
      }}
    </DarkModeContext.Consumer>
  )
}

export default GameItemCard
