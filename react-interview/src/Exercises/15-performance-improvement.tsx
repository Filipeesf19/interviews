import React, { useState } from "react";

interface Item {
  id: number;
  name: string;
}

interface ListItemProps {
  item: Item;
  onDelete: (id: number) => void;
}

const ListItem: React.FC<ListItemProps> = ({ item, onDelete }) => {
  return (
    <div>
      <span>{item.name}</span>
      <button onClick={() => onDelete(item.id)}>Delete</button>
    </div>
  );
};

const Exercise15: React.FC = () => {
  const [items, setItems] = useState<Item[]>(
    Array.from({ length: 1000 }, (_, i) => ({ id: i, name: `Item ${i}` }))
  );

  const deleteItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>Item List</h1>
      <div style={{ height: "400px", overflowY: "auto" }}>
        {items.map((item) => (
          <ListItem key={item.id} item={item} onDelete={deleteItem} />
        ))}
      </div>
    </div>
  );
};

export default Exercise15;
