import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mt-5">
			<h1 className="text-danger mb-3">Characters</h1>
			<div className="d-flex flex-row overflow-scroll mb-5">
				{store.people.map((person, index) => {
					// Verificamos si es favorito para pintar el corazon
					const isFavorite = store.favorites.includes(person.name);
					return (
						<div className="card mx-2" style={{ minWidth: "18rem" }} key={index}>
							<img
								src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`}
								className="card-img-top"
								alt={person.name}
							/>
							<div className="card-body">
								<h5 className="card-title">{person.name}</h5>
								<div className="d-flex justify-content-between">
									{/* Link arreglado: ahora incluye "people" */}
									<Link to={`/single/people/${index + 1}`} className="btn btn-outline-primary">
										Learn more!
									</Link>
									<button
										className="btn btn-outline-warning"
										onClick={() => actions.addFavorite(person.name)}
									>
										{/* Logica del corazon: lleno o vacio */}
										<i className={isFavorite ? "fas fa-heart text-danger" : "far fa-heart"} />
									</button>
								</div>
							</div>
						</div>
					);
				})}
			</div>

			<h1 className="text-danger mb-3">Planets</h1>
			<div className="d-flex flex-row overflow-scroll mb-5">
				{store.planets.map((planet, index) => {
					const isFavorite = store.favorites.includes(planet.name);
					return (
						<div className="card mx-2" style={{ minWidth: "18rem" }} key={index}>
							<img
								src={index === 0 ? "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png" : `https://starwars-visualguide.com/assets/img/planets/${index + 1}.jpg`}
								className="card-img-top"
								alt={planet.name}
								onError={(e) => { e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg" }}
							/>
							<div className="card-body">
								<h5 className="card-title">{planet.name}</h5>
								<div className="d-flex justify-content-between">
									{/* Link arreglado: ahora incluye "planets" */}
									<Link to={`/single/planets/${index + 1}`} className="btn btn-outline-primary">
										Learn more!
									</Link>
									<button
										className="btn btn-outline-warning"
										onClick={() => actions.addFavorite(planet.name)}
									>
										<i className={isFavorite ? "fas fa-heart text-danger" : "far fa-heart"} />
									</button>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};