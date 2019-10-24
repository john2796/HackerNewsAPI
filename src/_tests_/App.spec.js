import { React } from "react"
import { act } from "react-dom/test-utils"
import { App } from "../App"
import { render, cleanup } from "react-dom"
import { storyIds, singularStory } from "../fixtures"
import { getStoryIds, getStory } from "../services/hnApi"
import { useInifiteScroll } from "../hooks/useInfiniteScroll"

beforeEach(cleanup)
