import React, { Component } from 'react';
import { getMovieById, updateMovie } from '../../../actions';
import MovieCreateForm from '../../../components/movieCreateForm';
import Router from 'next/router';

export class Edit extends Component {
  // static getInitialProps({ query }) {
  //   return { query };
  // }

  static async getInitialProps({ query }) {
    const movie = await getMovieById(query.id);
    return { movie };
  }

  handleUpdateMovie = (movie) => {
    updateMovie(movie).then((updatedMovie) => {
      // router.push('/');
      Router.push('/movies/[id]', `/movies/${movie.id}`);
    });
  };

  // state = {
  //   movie: {
  //     name: '',
  //     description: '',
  //     rating: '',
  //     image: '',
  //     cover: '',
  //     longDesc: '',
  //     genre: '',
  //   },
  // };

  // componentDidMount() {
  //   const { id } = this.props.query;
  //   getMovieById(id).then((movie) => {
  //     this.setState({ movie });
  //   });
  // }

  render() {
    const { movie } = this.props;
    return (
      <div className="container">
        <h1>Edit the movie</h1>
        <MovieCreateForm
          submitButtonText="Update"
          initialData={movie}
          handleFormSubmit={this.handleUpdateMovie}
        />
      </div>
    );
  }
}

export default Edit;
