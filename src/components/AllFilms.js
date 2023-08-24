import fetch from 'node-fetch';
import React, { useState, useEffect } from 'react';
import { getDatabase, ref, set } from "firebase/database";

function AllFilms() {
    const [films, setFilms] = useState([]);

    function fetchAllFilms() {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;

        const options = { method: "Get", headers: { Accept: "application/json" } };

        fetch(url, options)
            .then((res) => res.json())
            .then((json) => {
                    // Use the JSON data here, e.g., update your component's state or Firebase
                    console.log(json);
                    console.log(process.env.TMDB_API_KEY); // Make sure this prints the correct value

                    setFilms(json.results);

                    const db = getDatabase(); // Initialize the database
                    const filmsRef = ref(db, 'films'); // Create a reference
                    set(filmsRef, json.results); // Set the data
            })
            .catch((err) => console.log("Error", err));
    };

    useEffect(() => {   
        fetchAllFilms();
    }, []);
    
      // You would call `fetchMovies` somewhere, like in a useEffect or in response to a button click
    return (
        <div>
            {films.map((film) => (
                <div key={film.id}>{film.title}</div>
            ))}
        </div>
    );
};

export default AllFilms;