import React from 'react'
import { Loading } from '../../components'
import { FavoriList } from './components'

export default (props) => {
    return (
        <div className="d-flex flex-fill pt-4 p-2">
                     {
            props.loaded ? (
                <div className="d-flex flex-fill pt-4 p-2">
                    <FavoriList
                        favoris={props.favoris}
                        removeFavori={props.removeFavori}
                    />
                </div>
            ) : (
                <Loading />
            )
        }
        </div>
    )
}