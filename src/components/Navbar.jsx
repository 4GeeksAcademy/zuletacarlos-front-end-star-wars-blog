import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3 px-5">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"
						style={{ width: "100px" }}
						alt="Logo"
					/>
				</span>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button
						className="btn btn-primary dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						Favorites <span className="badge bg-secondary">{store.favorites.length}</span>
					</button>
					<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
						{store.favorites.length > 0 ? (
							store.favorites.map((fav, index) => (
								<li key={index} className="d-flex justify-content-between align-items-center px-2">
									<span className="dropdown-item">{fav}</span>
									<i
										className="fas fa-trash-alt text-danger"
										style={{ cursor: "pointer" }}
										onClick={() => actions.deleteFavorite(index)}
									></i>
								</li>
							))
						) : (
							<li className="dropdown-item text-center">(Empty)</li>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};