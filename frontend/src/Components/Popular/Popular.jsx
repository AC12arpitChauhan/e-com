import React, { useEffect, useState } from "react";
import "./Popular.css";
import Item from "../Item/Item";
import { backendUrl } from "../../backendUrl";

const Popular = () => {

  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    fetch(`${backendUrl}/popularinwomen`)
    .then((response) => response.json())
    .then((data) => setPopularProducts(data))
  }, [])

  return (
    <div className="popular">
      <div className="popular-header">
        <h1>Popular in Women</h1>
        <hr />
        <p className="popular-subtitle">
          Discover our most-loved styles, handpicked by our community
        </p>
      </div>
      <div className="popular-item">
        {popularProducts.map((item, i) => {
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

export default Popular;
