import CarouselItem from "../../components/HomeCarousel/CarouselItem";
let number = 8;

export const caruselItemMaper = (popularMovies, banner) => {
    if (number >= popularMovies.length - 5) number = 2;
    const moviesCarousel =
        popularMovies.map((movie, index) => {

            let movieClass;

            if (index === number) {
                movieClass = "carousel-item active "
            } else {
                movieClass = "carousel-item"
            }

            const carouselProps = {
                key: movie.id,
                movieClass,
                banner,
                img: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                title: movie.original_title,
                released: movie.release_date
            }

            return <CarouselItem {...carouselProps} />;
        })

    number += 1;

    return moviesCarousel;
}

