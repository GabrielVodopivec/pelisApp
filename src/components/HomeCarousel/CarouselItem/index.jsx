export default function CarouselItem({ img, title, movieClass, released, banner }) {
    let year = released.split('-')[0]
    return (
        <div className={`${movieClass} `} data-bs-interval="10000">

            <div className="card bg-dark  text-white">

                <img src={img} className="card-img"  alt="movie" />
                <div className="card-img-overlay d-flex align-items-center">
                    <div className="overlayText text-center">
                        <h1 className="mb-0">{banner}</h1>
                        <p >All your favorites {banner}</p>
                        <h1 className="card-title">{title}</h1>
                        <h3>{year}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}