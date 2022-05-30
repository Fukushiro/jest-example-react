import React, { useState } from "react";

// import { Container } from './styles';
interface IList {
  initialItens: Array<string>;
}
const List: React.FC<IList> = ({ initialItens }) => {
  const [newItem, setNewItem] = useState<string>("");
  const [list, setList] = useState<Array<string>>(initialItens);

  function addToList() {
    setTimeout(() => {
      setList([...list, newItem]);
    }, 500);
  }

  function removeFromList(removeItem: string) {
    setTimeout(() => {
      setList(list.filter((item) => item !== removeItem));
    }, 500);
  }
  return (
    <>
      <input
        type="text"
        placeholder="Novo item"
        onChange={(e) => setNewItem(e.target.value)}
        value={newItem}
      />
      <button onClick={addToList}>Adicionar</button>
      <ul>
        {list.map((item) => (
          <li key={item}>
            {item}
            <button onClick={() => removeFromList(item)}>remove</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
