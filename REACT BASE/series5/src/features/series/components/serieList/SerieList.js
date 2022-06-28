import React, { Component } from "react";
import SerieItem from "./SerieItem";

export default class SerieList extends Component {
    render() {
        console.log(this.props);
        return(
            <div className="w-75 d-flex flex-wrap align-content-start">
                {
                    this.props.series.map((serie, index) => (
                        <SerieItem
                         key={serie.id}
                         serie={serie}
                         updateSelectedSerie={() => this.props.updateSelectedSerie(index)}
                         isFavori = {this.props.favoris.includes(serie.title)}
                         removeFavori={this.props.removeFavori}
                         addFavori={this.props.addFavori}
                          />
                    ))
                }
            </div>
        )
    }
}