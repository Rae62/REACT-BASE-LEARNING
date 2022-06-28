import React, { Component } from "react";
import { Header } from "./components";
import apiSerie, {apiSerieMap} from './config/api.serie';
import apiFirebase from "./config/api.firebase";
import Series from './features/series'
import Favoris from './features/favoris'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      series: null,
      selectedSerie: 0,
      loaded: false,
      favoris: null
    }
  }

  componentDidMount() {
    apiSerie.get('/discover/tv')
    .then(
      response => response.data.results
    )
    .then(
      seriesApi => {
        const series = seriesApi.map(apiSerieMap)
        this.updateSeries(series)
      })
    .catch(err =>  console.log(err))
    apiFirebase.get('favoris.json').then(
      response => {
        let favoris = response.data ? response.data : [];
        this.updateFavoris(favoris)
      }
    )
  }

  updateFavoris = (favoris) => {
    this.setState({
      favoris,
      loaded: this.state.series ? true : false
    })
  }

  updateSeries = (series) => {
    this.setState({
      series,
      loaded: this.state.favoris ? true : false
    })
  }

  updateSelectedSerie = (index) => {
    this.setState({
      selectedSerie: index
    })
  }

  addFavori = (title) => {
    const favoris = this.state.favoris.slice();
    const serie = this.state.series.find( s => s.title === title);
    favoris.push(serie)
    this.setState({
      favoris
    }, () => {
      this.saveFavoris()
    })
  }

  removeFavori = (title) => {
    const favoris = this.state.favoris.slice();
    const index = this.state.favoris.findIndex(s => s.title === title)
    favoris.splice(index, 1);
    this.setState({
      favoris
    }, () => {
      this.saveFavoris();
    })
  }

    saveFavoris = () => {
      apiFirebase.put('favoris.json', this.state.favoris)
    }


  render() {
    return (
      <Router>
        <div className="App d-flex flex-column">
            <Header />
            <Switch>
              <Route path='/series' render={
                (props) => {
                  return(
                    <Series
                        {...props}
                        loaded={this.state.loaded}
                        updateSeries={this.updateSeries}
                        updateSelectedSerie={this.updateSelectedSerie}
                        series={this.state.series}
                        selectedSerie={this.state.selectedSerie}
                        addFavori={this.addFavori}
                        removeFavori={this.removeFavori}
                        favoris={this.state.favoris}
                    />
                  )
                }
              } />
              <Route path='/favoris' render={ (props) => {
                return (
                  <Favoris
                      {...props}
                      loaded={this.state.loaded}
                      favoris={this.state.favoris}
                      removeFavori={this.removeFavori}
                   />
                )
              }} />
              <Redirect to='/series' />
            </Switch>
        </div>
      </Router>

    );
  }

}

export default App;
