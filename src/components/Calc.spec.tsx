import { render } from "@testing-library/react";
import Calc from "./Calc";
import axios from "axios";
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
describe("Calc component", () => {
  it("should render", () => {
    const { getByTestId } = render(<Calc />);
    expect(getByTestId("coisa")).toBeTruthy();
  });

  it("should have value 4", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: 6 });
    const { findByText, debug } = render(<Calc />);
    debug();
    expect(await findByText("4")).toBeTruthy();
  });
});
