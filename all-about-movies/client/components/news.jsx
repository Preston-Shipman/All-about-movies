import React from 'react';
import Axios from 'axios';

class News extends React.Component {
  constructor(url) {
    this.data = {
      url: url
    }
  }

  render() {
    let divElem = $('<div>');
    let anchorElem = $('<a>').attr({ 'href': this.data.url, 'target': '_blank' }).text('news');
    let renderFinish = divElem.append(anchorElem);
    return renderFinish;
  }
}

export default News;
