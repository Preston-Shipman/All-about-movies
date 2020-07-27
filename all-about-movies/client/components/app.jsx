import React from 'react';
import Axios from 'axios';
import Movie from './movie';
import MovieResult from './movieResult';
import News from './news';
import Review from './nyTimesReview';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };

  }

  componentDidMount() {
    new movieResult();
    getMovies.addEventHandler();
  }

  render() {
    <div className="container">
      <nav className="navbar navbar-light bg-light text-justify">
        <a className="navbar-brand text-center" href="#">Movie News & Reviews</a>
      </nav>

      <form action="">
        <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
          <div class="input-group">
            <input type="search" placeholder="Search for movies here" aria-describedby="button-addon1" class="form-control border-0 bg-light">
              <div class="input-group-append">
                <button id="button-addon1" type="submit" class="btn btn-link text-primary"><i class="fa fa-search"></i></button>
              </div>
            </div>
          </div>
        </div>
      </form>

        <div className="resultContainer"></div>

        <div id="movieInfoModal" className="hidden">
          <div className="modalHeader">
            <div className="modalTitle"></div>
            <div className="modalCloseButton">&times;</div>
          </div>
          <div className="modalBody">
            <div className="modalRow">
              <div className="posterRTBox">
                <div className="modalMoviePoster"></div>
                <div className="releaseAndTypeBox">
                  <div className="modalReleaseDate"></div>
                  <div className="modalMovieType"></div>
                </div>
              </div>
              <div className="modalReviewsBox"></div>
            </div>

            <div className="modalNewsBox">
            </div>
          </div>
        </div>
    </div>
  }
}
