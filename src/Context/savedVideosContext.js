import React from 'react'

const SavedVideosContext = React.createContext({
  savedVideos: [],
  addVideo: () => {},
  removeVideo: () => {},
})

export default SavedVideosContext
