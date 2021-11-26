// import Head from "next/head";
// import Image from "next/image";
// import Link from "next/link";
import KSUID from "ksuid";
import { useState } from "react";

const Home = () => {
  const [newItemName, setNewItemName] = useState("");
  const [items, setItems] = useState([]);

  const addNew = (e) => {
    e.preventDefault();
    if (newItemName) {
      const newItem = {
        id: KSUID.randomSync().string,
        name: newItemName,
        done: true,
      };
      setItems([newItem, ...items]);
    }
    setNewItemName("");
  };

  return (
    <div>
      <h1>Todo app</h1>
      <form onSubmit={addNew}>
        <input
          type="text"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input type="checkbox" checked={item.done} />
            {item.name} - {item.id}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
