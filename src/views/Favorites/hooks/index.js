import { useEffect, useState } from "react";

export default function useFavoritesLoader() {
    let [favs, setFavs] = useState(null);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulación de demora en la consulta de Favoritos;
        setTimeout(() => {
            const favsObject = JSON.parse(localStorage.getItem('favs'));
            setFavs(Object.entries(favsObject));
            setLoading(false)
        }, 1200)

    }, [])

    return { favs, loading }
}