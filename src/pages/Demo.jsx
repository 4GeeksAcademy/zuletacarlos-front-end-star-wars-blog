import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Demo = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <ul className="list-group">
        {store.people.map((item, index) => {
          return (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between"
              style={{ background: item.background }}>
              <Link to={"/single/" + index}>
                <span>Link to: {item.name}</span>
              </Link>
              <button className="btn btn-success" onClick={() => actions.addFavorite(item.name)}>
                Add Favorite
              </button>
            </li>
          );
        })}
      </ul>
      <br />
      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};