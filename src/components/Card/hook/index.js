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

        !localStorage.getItem('favs') && localStorage.setItem('favs', JSON.stringify({}));

        let checkStore = JSON.parse(localStorage.getItem('favs'));

        if (!checkStore[props.id]) {
            checkStore = {
                ...checkStore,
                [props.id]: {
                    ...elemenToStore[props.id]
                }
            }
            setFav(() => true);

        } else {
            delete checkStore[props.id]
            setFav(() => false);
        }

        const infoToStoreToJSON = JSON.stringify(checkStore);
        localStorage.setItem('favs', infoToStoreToJSON);

        // console.log(JSON.parse(localStorage.getItem('favs')))
    }

    useEffect(() => {
        let getFavs = localStorage.getItem('favs');
        if (getFavs) {
            let getFavsToObj = JSON.parse(getFavs);
            if (getFavsToObj[props.id]) {
                setFav(getFavsToObj[props.id].isFav)
            }
        }
    }, [props.id])

    return { fav, addOrRemovefavs }
}