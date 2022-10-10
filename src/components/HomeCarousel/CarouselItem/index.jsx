export default function CarouselItem({ img, title, movieClass, released }) {
    let year = released.split('-')[0]
    return (
        <div className={`${movieClass} `} data-bs-interval="10000">

            <div className="card bg-dark text-white">

                <img src={img} className="card-img" alt="movie" />
                <div className="card-img-overlay">
                    <div className="overlayText">
                        <h1>Peliss App</h1>
                        <p>Un Lugar, todas las peliculas</p>
                        <h1 className="card-title">{title}</h1>
                        <h3>{year}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}