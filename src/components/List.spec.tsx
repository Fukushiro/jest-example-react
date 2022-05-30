import {
  render,
  fireEvent,
  waitForElementToBeRemoved,
  waitFor,
  screen,
} from "@testing-library/react";

import App from "../App";
import List from "./List";

describe("List component", () => {
  it("should render list items", async () => {
    const { getByText, rerender } = render(
      <List initialItens={["Diego", "Rodz", "Mayk"]} />
    );

    expect(getByText("Diego")).toBeInTheDocument();
    expect(getByText("Rodz")).toBeInTheDocument();
    expect(getByText("Mayk")).toBeInTheDocument();

    // rerender(<List initialItens={["Julia"]} />);
    // expect(screen.getByText("Julia")).toBeInTheDocument();
  });

  it("should be able to add new item to the list", async () => {
    const { getByText, getByPlaceholderText, findByText, debug } = render(
      <List initialItens={[]} />
    );
    const inputElement = getByPlaceholderText("Novo item");
    const addButton = getByText("Adicionar");
    fireEvent.change(inputElement, { target: { value: "Novo" } });
    fireEvent.click(addButton);
    expect(await findByText("Novo")).toBeInTheDocument();
  });

  it("should be able to remove an item from the list", async () => {
    const { getAllByText, queryByText, getByText } = render(
      <List initialItens={["Diego", "Rodz", "Mayk"]} />
    );

    const removeButtons = getAllByText("remove");
    fireEvent.click(removeButtons[0]);

    await waitFor(() => {
      expect(queryByText("Diego")).not.toBeInTheDocument();
    });
  });
});
