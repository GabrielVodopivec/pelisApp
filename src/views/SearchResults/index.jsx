import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"

// Librerias
import axios from "axios";

// Components
import Card from "../../components/Card";
import { useSelector } from "react-redux";
import { tokenSelector } from "../../app/selectors";

export default function SearchResults() {

    const API_KEY = 'a04a68419e3fe121fef2adc2e7039e61';

    // Hooks
    const token = useSelector(tokenSelector);
    let [searchResults, setSearchResult] = useState([])
    const navigate = useNavigate();
    
    // Query parms
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const s = query.get('s');


    useEffect(() => {

        if (!token) {
            return navigate('/');
        }

        const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${s}`

        axios(url)
            .then(({ data }) => {
                const { results } = data;
                if (!results.length) {
                    return setSearchResult(['Not found'])
                }
                setSearchResult(results);
            })
            .catch(({ results }) => {
                console.log(results)
            });

    }, [s, navigate, token]);

    console.log('re-render')

    return (
        <div className="movieContainer">
            {
                token ? 
                searchResults[0] === 'Not found' ?
                (<h1>Not Found</h1>) : (
                    searchResults?.map(movie => {
                        return (
                            <Card
                                key={movie.id}
                                id={movie.id}
                                title={movie.original_title}
                                votes={movie.vote_average}
                                votesQuantity={movie.vote_count}
                                released={movie.release_date}
                                overview={movie.overview}
                                img={
                                    movie.backdrop_path ? 
                                    `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` :
                                    "https://www.ventanasur.com.ar/wp-content/uploads/2021/04/cine-argentino-2.jpg"
                                }
                            />
                        )
                    })
                ) : <h1>Loading ...</h1>
            }
        </div>
    )
}