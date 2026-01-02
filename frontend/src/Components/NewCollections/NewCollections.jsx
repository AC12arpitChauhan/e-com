import React, { useEffect, useState } from "react";
import "./NewCollections.css";
import Item from "../Item/Item";

const NewCollections = () => {

  const [new_collection, setNew_collection] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/newcollections')
    .then((response) => response.json())
    .then((data) => setNew_collection(data))
  }, [])

  return (
    <div className="new-collections">
      <div className="new-collections-header">
        <h1>New Collections</h1>
        <hr />
        <p className="new-collections-subtitle">
          Fresh arrivals curated just for you — explore the latest trends
        </p>
      </div>
      <div className="collections">
        {new_collection.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollections;
