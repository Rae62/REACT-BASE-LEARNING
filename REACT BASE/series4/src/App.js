import React, { Component } from "react";
import Header from "./composant/header/Header";
import SerieDetail from "./composant/serieDetail/SerieDetail";
import SerieList from "./composant/serieList/SerieList";
import Loaded from "./Loaded";
import apiSerie, {apiSerieMap} from "./config/api.serie";
import SearchBar from "./composant/searchBar/SearchBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: null,
      selectedSerie: 0,
      loaded: false,
    };
  }

  updateSelectedSerie = (index) => {
    this.setState({
      selectedSerie: index,
    });
  };

  componentDidMount() {
    apiSerie
      .get("/discover/tv")
      .then(response => response.data.results)
      .then(serieApi => {
        const series = serieApi.map(apiSerieMap)
        this.updateSerie(series)
      })
      .catch((err) => console.log(err))      
  }

  updateSerie = (series) => {
    this.setState({
      series,
      loaded: true,
    });
  }

  render() {
    return (
      <div className="App d-flex flex-column">
        <Header />
        <SearchBar updateSerie={this.updateSerie} />
        {this.state.loaded ? (
          <div className="d-flex flex-fill pt-3">
            <SerieList
              series={this.state.series}
              selectSerieToSerieList={this.updateSelectedSerie}
            />
            <SerieDetail serie={this.state.series[this.state.selectedSerie]} />
          </div>
        ) : (
          <Loaded />
        )}
      </div>
    );
  }
}

export default App;
