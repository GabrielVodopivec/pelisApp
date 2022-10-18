import { useEffect, useState } from "react";

export default function useCardFavorite(props) {
    let [fav, setFav] = useState(false);

    const addOrRemovefavs = () => {

        const elemenToStore = {
            [props.id]: {
                isFav: true,
                original_title: props.title,
                backdrop_path: props.img,
                vote_average: props.votes,
                vote_count: props.votesQuantity,
                release_date: props.released
            }
        };

        let checkStore = JSON.parse(localStorage.getItem('favs'));

        if (!checkStore[props.id]) {
            checkStore = {
                ...checkStore,
                ...elemenToStore
            }
            setFav(() => true);

        } else {
            delete checkStore[props.id]
            setFav(() => false);
        }

        const infoToStoreToJSON = JSON.stringify(checkStore);
        localStorage.setItem('favs', infoToStoreToJSON);

        console.log(JSON.parse(localStorage.getItem('favs')))
    }

    useEffect(() => {
        let getFavs = JSON.parse(localStorage.getItem('favs'));
      
            if (getFavs[props.id]) {
                setFav(getFavs[props.id].isFav)
            }
        
    }, [props.id])

    return { fav, addOrRemovefavs }
}