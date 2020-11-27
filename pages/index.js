import SideMenu from '../components/sideMenu';
import Carousel from '../components/carousel';
import MovieList from '../components/movieList';

import { getCategories, getMovies } from '../actions/index';
import { useState } from 'react';

const Home = (props) => {
  const { images, categories, movies } = props;

  const [filter, setFilter] = useState('all');

  const changeCategory = (category) => {
    setFilter(category);
  };

  const filterMovies = (movies) => {
    if (filter === 'all') {
      return movies;
    }
    return movies.filter((movie) => {
      return movie.genre && movie.genre.includes(filter);
    });
  };

  /* const [movies, setMovies] = useState([]);
  const [count, setCount] = useState(0);

  // Use effect with empty array executes the code one time
  // Component did mount
  useEffect(
    () => {
      const fetchData = async () => {
        const resMovies = await getMovies();
        console.log('set movies');
        setMovies(resMovies);
      };

      fetchData();

      // getMovies().then((movies) => {
      //   console.log('set movies');
      //   setMovies(movies);
      // });
    },
    [count]
  ); // */

  return (
    <div className="home-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <SideMenu
              changeCategory={changeCategory}
              appName={'Movie DB'}
              categories={categories}
              activeCategory={filter}
            />
          </div>
          <div className="col-lg-9">
            <Carousel images={images} />
            <h1>Displaying: {filter} movies</h1>
            <div className="row">
              <MovieList movies={filterMovies(movies) || []} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.getInitialProps = async () => {
  const movies = await getMovies();

  const images = movies.map((movie) => {
    return {
      id: `image-${movie.id}`,
      url: movie.cover,
      title: movie.name,
    };
  });

  const categories = await getCategories();

  return {
    movies,
    images,
    categories,
  };
};

// class Home extends React.Component {
//   static async getInitialProps() {
//     const movies = await getMovies();
//     return {
//       movies,
//     };
//   }

//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     movies: [],
//   //     error: '',
//   //   };
//   // }

//   // Is called on CLient ( browser ...)
//   // componentDidMount() {
//   //   getMovies()
//   //     .then((movies) => {
//   //       console.log('set movies');
//   //       this.setState({ movies });
//   //     })
//   //     .catch((error) => {
//   //       this.setState({ error });
//   //     });
//   // }

//   render() {
//     const { movies } = this.props;
//     return (
//       <div>
//         <Head>
//           <title>Home</title>
//           <link
//             rel="stylesheet"
//             href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
//             integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
//             crossOrigin="anonymous"
//           />
//           <script
//             src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
//             integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
//             crossOrigin="anonymous"
//           />
//           <script
//             src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
//             integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
//             crossOrigin="anonymous"
//           />
//           <script
//             src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
//             integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
//             crossOrigin="anonymous"
//           />
//         </Head>
//         <NavBar />
//         <div className="home-page">
//           <div className="container">
//             <button onClick={() => setCount(count)}>Click me</button>
//             <div className="row">
//               <div className="col-lg-3">
//                 <SideMenu appName={'Movie DB'} />
//               </div>
//               <div className="col-lg-9">
//                 <Carousel />
//                 <div className="row">
//                   <MovieList movies={movies} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Footer />
//         <style jsx>
//           {`
//             .home-page {
//               padding-top: 80px;
//             }
//           `}
//         </style>
//       </div>
//     );
//   }
// }

export default Home;
