import React from 'react';
import Axios from 'axios';

class Review extends React.Component{
  constructor(url, headline) {
    this.url = url;
    this.headline = headline;
    this.render();
  }

  render() {
    let divElem = $('<div>');
    let anchorElem = $('<a>').attr({ 'href': this.url, 'target': '_blank' }).text(this.headline);
    divElem.append(anchorElem);
    $('.modalReviewsBox').append(divElem);
  }
}

export defualt Review;
