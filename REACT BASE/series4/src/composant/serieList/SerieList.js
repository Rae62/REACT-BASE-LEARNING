import React, { Component } from "react";
import SerieItem from "./SerieItems";

export default class SerieList extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="w-75 d-flex flex-wrap align-content-start">
        {
        this.props.series.map((serie, index) => (
          <SerieItem
            key={serie.id}
            serie={serie}
            selectSerieToSerieItem={() => this.props.selectSerieToSerieList(index) }
          />
        ))}
      </div>
    );
  }
}
