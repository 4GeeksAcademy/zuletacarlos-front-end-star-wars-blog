const getState = ({ getStore, getActions, setStore }) => {
  const API_URL = "https://stunning-system-qvv996pjp5xhx9-3000.app.github.dev";

  return {
    store: {
      people: [],
      planets: [],
      favorites: []
    },
    actions: {
      getPeople: () => {
        fetch(API_URL + "/people")
          .then(res => {
            if (!res.ok) console.log("Error en la respuesta del backend");
            return res.json();
          })
          .then(data => {
            setStore({ people: data });
          })
          .catch(err => console.error("Error cargando people:", err));
      },

      getPlanets: () => {
        fetch(API_URL + "/planets")
          .then(res => {
            if (!res.ok) console.log("Error en la respuesta del backend");
            return res.json();
          })
          .then(data => {
            setStore({ planets: data });
          })
          .catch(err => console.error("Error cargando planets:", err));
      },
      addFavorite: (item) => {
        const store = getStore();
        if (store.favorites.includes(item)) return;
        setStore({ favorites: [...store.favorites, item] });
      },

      deleteFavorite: (indexToDelete) => {
        const store = getStore();
        setStore({
          favorites: store.favorites.filter((_, index) => index !== indexToDelete)
        });
      }
    }
  };
};

export default getState;