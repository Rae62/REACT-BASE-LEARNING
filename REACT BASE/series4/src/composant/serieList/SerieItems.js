import React, { Component } from "react";

export default class SerieItem extends Component {

  
  selectSerie = () => {
    this.props.selectSerieToSerieItem(this.props.serie.id);
  };

  render() {
    console.log(this.props);
    return (
      <div className="w-50 p-2" onClick={this.selectSerie}>
        <div className="border d-flex">
          <img className="imgSize" src={this.props.serie.img} alt="" />
          <div className="flex-fill d-flex flex-column p-3">
            <h5>{this.props.serie.title}</h5>
            <hr className="w-100" />
            <p>{this.props.serie.details}</p>
          </div>
        </div>
      </div>
    );
  }
}

