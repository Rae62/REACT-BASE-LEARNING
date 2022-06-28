import React, { Component } from "react";

export default class FavoriItem extends Component {

    render() {
        return(
            <div className="w-50 p-2">
                <div className="border d-flex">
                    <img className="imgSize" src={this.props.favori.img} alt="" />
                    <div className="flex-fill d-flex flex-column p-3">
                        <h5>{this.props.favori.title}</h5>
                        <hr className="w-100" />
                        <p className="flex-fill">{this.props.favori.details}</p>
                        <div className="d-flex justify-content-end">
                        <button onClick={() => {this.props.removeFavori(this.props.favori.title)}} className="btn btn-small btn-danger">Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}