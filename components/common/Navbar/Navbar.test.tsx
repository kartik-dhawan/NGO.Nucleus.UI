import renderer from "react-test-renderer"
import Navbar from "."
import { Provider } from "react-redux"
import store from "../../../redux/store"
import "@testing-library/jest-dom"

describe("Navbar component", () => {
  it("-- should render correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Navbar />
        </Provider>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
