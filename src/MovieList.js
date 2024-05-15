import React, { useState, useRef } from 'react';
import Movie from './Movie';

export default function MovieList() {
    const [movies, setMovies] = useState([]);
    const inputRef = useRef();
    const selectRef = useRef();

    function addMovie() {
        const title = inputRef.current.value;
        const rating = parseInt(selectRef.current.value);
        if (title.trim() !== "" && rating >= 1 && rating <= 5) {
            const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;

            setMovies([...movies, {
                id: newId,
                title: inputRef.current.value,
                rating: rating
            }]);

            inputRef.current.value = ""; 
            selectRef.current.value = "0"
             
        } else {
            alert("Båda titel och betyg måste fyllas i")
        }
    }
    
    function deleteMovie(id){
        setMovies(movies.filter((movie) => movie.id !== id));
    }

    function AlphabeticalOrder() {
        const orderMoviesABC = [...movies].sort((a, b) => a.title.localeCompare(b.title));
        setMovies(orderMoviesABC);
    }

    function RatingOrder() {
        const orderMoviesRating = [...movies].sort((a, b) => b.rating - a.rating);
        setMovies(orderMoviesRating);
    }

    

    return (
        <div>
            <h6>Titel:</h6>
            <input ref={inputRef} className='form-control' placeholder='Titel här...' />
            <h6>Betyg:</h6>
            <select ref={selectRef} className='form-control'>
                <option value='0'>Välj betyg här...</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>
            <button title='Spara film' onClick={addMovie}>Spara film</button>
            <h5>Sparade Filmer</h5>
            <ul className='list-group'>
                { movies.map(movie => <Movie key={movie.id} item={movie} deleteMovie={deleteMovie} />) }
            </ul>
            <button onClick={AlphabeticalOrder}>Alfabetisk ordning</button>
            <button onClick={RatingOrder}>Sortera efter betyg</button>
        </div>
    );
}
