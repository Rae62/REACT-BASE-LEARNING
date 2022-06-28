import React, { Component } from "react";

export default class SerieItem extends Component {

    selectSerie = () => {
        this.props.updateSelectedSerie()
    }

    render() {
        return(
            <div className="w-50 p-2" onClick={this.selectSerie}>
                <div className="border d-flex">
                    <img className="imgSize" src={this.props.serie.img} alt="" />
                    <div className="flex-fill d-flex flex-column p-3">
                        <h5>{this.props.serie.title}</h5>
                        <hr className="w-100" />
                        <p className="flex-fill">{this.props.serie.details}</p>
                        <div className="d-flex justify-content-end">
                            {
                                this.props.isFavori ? (
                                    <button
                                    onClick={() => {this.props.removeFavori(this.props.serie.title)}}
                                     className="btn btn-small btn-danger">Remove</button>
                                ) : (
                                    <button className="btn btn-small btn-success"
                                    onClick={() => {this.props.addFavori(this.props.serie.title)}}
                                    >Add</button>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}