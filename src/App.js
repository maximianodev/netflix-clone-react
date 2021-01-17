import './App.css';
import { useEffect, useState } from 'react'
import Tmdb from './Tmdb'
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      // Pegar toda a lista
      let list = await Tmdb.getHomeList()
      setMovieList(list);

      // Pegando o Featured
      let originals = list.filter(i => i.slug.toLowerCase() === "originals")
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      console.log(chosen);
    }
    loadAll()
  }, [])

  return (
    <div className="page">
      {featuredData &&
      <FeaturedMovie item={featuredData}/>}
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div>
  );
}

export default App;
