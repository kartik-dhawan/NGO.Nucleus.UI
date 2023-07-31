import renderer from "react-test-renderer"
import { Provider } from "react-redux"
import "@testing-library/jest-dom"
import store from "../../../../redux/store"
import HeroSection from "."

describe("Hero section", () => {
  it("-- should render correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <HeroSection />
        </Provider>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
