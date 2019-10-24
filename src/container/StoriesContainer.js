import React, { useEffect, useState } from "react"
import { getStoryIds } from "../services/hnApi"
import { Story } from "../components/Story"
import { useInifiteScroll } from "../hooks/useInfiniteScroll"
import {
  GlobalStyle,
  StoriesContainerWrapper
} from "../styles/StoriesContainerStyles"

export const StoriesContainer = () => {
  const { count } = useInifiteScroll()
  const [storyIds, setStoryIds] = useState([])

  useEffect(() => {
    getStoryIds().then(storyId => setStoryIds(storyId))
  }, [])

  console.log(count)

  return (
    <>
      <GlobalStyle />
      <StoriesContainerWrapper>
        <h1>Hacker News Stories</h1>
        {storyIds.slice(0, count).map(id => {
          return <Story key={id} storyId={id} />
        })}
      </StoriesContainerWrapper>
    </>
  )
}
