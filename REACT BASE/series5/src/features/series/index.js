import React from 'react'
import { Loading } from '../../components'
import { SearchBar, SerieList, SeriesDetails } from './components'


export default (props) => {
    return(
        <>
        <SearchBar updateSeries={props.updateSeries} />
        {
            props.loaded ? (
                <div className="d-flex flex-fill pt-4 p-2">
                    <SerieList
                     series={props.series}
                      updateSelectedSerie={props.updateSelectedSerie}
                      favoris={props.favoris.map(s => s.title)}
                      removeFavori={props.removeFavori}
                      addFavori={props.addFavori}
                       />
                    <SeriesDetails serie={props.series[props.selectedSerie]} />
                </div>
            ) : (
                <Loading />
            )
        }
        </>
    )
}