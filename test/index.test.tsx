import { render } from "@testing-library/react"
import renderer from "react-test-renderer"
import "@testing-library/jest-dom"
import Home from "../pages"

jest.mock("next/router", () => require("next-router-mock"))

describe("Home page", () => {
  it("-- should match snapshot", () => {
    const tree = renderer.create(<div />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
