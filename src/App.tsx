import { useState } from "react";
import Calc from "./components/Calc";
import List from "./components/List";

function App() {
  return (
    <>
      <List initialItens={["Diego", "Rodz", "Mayk"]} />
      <Calc />
    </>
  );
}
export default App;
