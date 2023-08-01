import renderer from "react-test-renderer"
import { Provider } from "react-redux"
import store from "../../../redux/store"
import "@testing-library/jest-dom"
import Footer from "."

describe("Footer component", () => {
  it("-- should render correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Footer />
        </Provider>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
