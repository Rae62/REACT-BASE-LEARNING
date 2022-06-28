import React, { Component } from "react";
import FavoriItem from "./FavoriItem";

export default class FavoriList extends Component {
    render() {
        console.log(this.props);
        return(
            <div className="w-75 d-flex flex-wrap align-content-start">
                {
                    this.props.favoris.map((favori, index) => (
                        <FavoriItem
                         key={favori.id}
                         favori={favori}
                         removeFavori={this.props.removeFavori}
                          />
                    ))
                }
            </div>
        )
    }
}