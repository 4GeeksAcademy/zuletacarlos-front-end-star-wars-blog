import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = () => {
  const { store } = useContext(Context);
  const { type, theId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (type === "people") {
      if (store.people[theId - 1]) {
        setItem(store.people[theId - 1]);
      }
    } else if (type === "planets") {
      if (store.planets[theId - 1]) {
        setItem(store.planets[theId - 1]);
      }
    }
  }, [store.people, store.planets, type, theId]);

  return (
    <div className="container mt-5">
      {item ? (
        <div className="jumbotron text-center bg-light p-5 rounded">
          <h1 className="display-4 text-uppercase">{item.name}</h1>
          <hr className="my-4" />

          { }
          <div className="row">
            {type === "people" ? (
              <>
                <div className="col-md-4"><strong>Gender:</strong> {item.gender || "N/A"}</div>
                <div className="col-md-4"><strong>Hair Color:</strong> {item.hair_color || "N/A"}</div>
                <div className="col-md-4"><strong>Eye Color:</strong> {item.eye_color || "N/A"}</div>
              </>
            ) : (
              <>
                <div className="col-md-4"><strong>Population:</strong> {item.population || "N/A"}</div>
                <div className="col-md-4"><strong>Terrain:</strong> {item.terrain || "N/A"}</div>
                <div className="col-md-4"><strong>Climate:</strong> {item.climate || "N/A"}</div>
              </>
            )}
          </div>

          <div className="mt-4">
            <Link to="/">
              <span className="btn btn-primary btn-lg" role="button">
                Back home
              </span>
            </Link>
          </div>
        </div>
      ) : (
        <div className="text-center mt-5">
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
};