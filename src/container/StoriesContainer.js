import React, { useEffect, useState } from "react"
import { getStoryIds } from "../services/hnApi"
import { Story } from "../components/Story"
import {
  GlobalStyle,
  StoriesContainerWrapper
} from "../styles/StoriesContainerStyles"

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([])

  useEffect(() => {
    getStoryIds().then(storyId => setStoryIds(storyId))
  }, [])

  return (
    <>
      <GlobalStyle />
      <StoriesContainerWrapper>
        <h1>Hacker News Stories</h1>
        {storyIds.map(id => {
          return <Story key={id} storyId={id} />
        })}
      </StoriesContainerWrapper>
    </>
  )
}
