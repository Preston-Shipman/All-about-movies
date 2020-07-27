import React from 'react';
import Axios from 'axios';

class News extends React.Component {
  constructor(url) {
    this.data = {
      url: url
    }
  }

  render() {
    var divElem = $('<div>');
    var anchorElem = $('<a>').attr({ 'href': this.data.url, 'target': '_blank' }).text('news');
    var renderFinish = divElem.append(anchorElem);
    return renderFinish;
  }
}

export default News;
