class News {
  constructor(url) {
    this.data = {
      url: url
    }
  }

  render() {
    var divElem = $('<li>');
    var anchorElem = $('<a>').attr({ 'href': this.data.url, 'target': '_blank' }).text('news').addClass("list-group-item list-group-item-action");
    var renderFinish = divElem.append(anchorElem);
    return renderFinish;
  }
}
