import { render, waitFor } from "@testing-library/react";
import Calc from "./Calc";
import axios from "axios";
import { act } from "react-dom/test-utils";
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.get.mockImplementation((url) => {
  if (url === "http://api.mathjs.org/v4/?expr=2*2") {
    return Promise.resolve({ data: 4 });
  }
  return Promise.resolve({ data: 44 });
});
describe("Calc component", () => {
  it("should render", () => {
    const { getByTestId } = render(<Calc />);
    expect(getByTestId("coisa")).toBeTruthy();
  });

  it("should have value 4", async () => {
    // mockedAxios.get.mockResolvedValueOnce({ data: 4 });

    const { findByText, getByText, debug } = render(<Calc />);
    debug();
    await waitFor(() => {
      expect(getByText("4")).toBeInTheDocument();
    });
  });
});
