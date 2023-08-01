import renderer from "react-test-renderer"
import { Provider } from "react-redux"
import store from "../../../redux/store"
import "@testing-library/jest-dom"
import ContactCard from "./ContactCard"
import { CONTENTFUL_MOCK_DATA } from "../../../utils/mockData"

describe("Contact card component", () => {
  it("-- should render correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ContactCard content={CONTENTFUL_MOCK_DATA} />
        </Provider>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
