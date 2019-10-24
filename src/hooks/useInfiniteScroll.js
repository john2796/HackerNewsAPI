import { useEffect, useState } from "react"
import { MAX_STORIES, STORY_INCREMENT } from "../constant/index"
import { debounce } from "../utils/debounce"

export const useInifiteScroll = () => {
  const [loading, setLoading] = useState(false)
  const [count, setCount] = useState(STORY_INCREMENT)

  const handleScroll = debounce(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    ) {
      return false
    }
    setLoading(true)
  }, 300)

  useEffect(() => {
    // if loading is not false
    if (!loading) return
    // if current count is greater than max stories set count to max
    if (count + STORY_INCREMENT >= MAX_STORIES) {
      setCount(MAX_STORIES)
    } else {
      // else increment
      setCount(count + STORY_INCREMENT)
    }
    setLoading(false)
  }, [loading])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    // cleaned up
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return { count }
}
