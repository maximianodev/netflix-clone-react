import './style.css';

export default function MovieRow({item}) {
    return (
        <div className="movieRow--banner-principal">
            <div src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} alt={item.original_name} />
            <h1>{item.name}</h1>
            <h3>{item.overview}</h3>
        </div>
    )
}
