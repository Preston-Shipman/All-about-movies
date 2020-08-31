class News {
  constructor(url) {
    this.data = {
      url: url
    }
  }

  render() {
    var divElem = $('<li>');
    var anchorElem = $('<a>').attr({ 'href': this.data.url, 'target': '_blank' }).text('News').addClass("list-group-item");
    var renderFinish = divElem.append(anchorElem);
    return renderFinish;
  }
}
