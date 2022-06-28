import React, {Component} from "react";
import { Formik } from "formik";
import apiSerie, {apiSerieMap} from '../../config/api.serie'

export default class SearchBar extends Component {

submit = (values, actions) => {   
    const query = '?' + (Object.keys(values).map(
        k => `${k}=${values[k]}&`).join(''))
     console.log(query)
    apiSerie.get('/search/tv' + query)
    .then((response) => response.data.results)
    .then((serieApi) => {
      const series = serieApi.map(apiSerieMap)
      this.props.updateSerie(series)
     
    })
    .catch((err) => console.log(err))
    actions.setSubmitting(false)
}


  render() {
      return(
   <Formik
   onSubmit=  {this.submit}
   initialValues={{query: ''}}
   >
       { ({handleSubmit, handleChange, handleBlur, isSubmitting}) => (
        <form className="d-flex m-2 p-2" onSubmit={ handleSubmit }>
            <input className="flex-fill form-control mr-2"  name="query" type="text" placeholder="Search..." 
            onChange={ handleChange } onBlur={handleBlur }/>
            <select className="mr-2 form-control w-25" name="language" onChange={ handleChange } onBlur={handleBlur }>
                <option value="en-US">Anglais</option>
                <option value="fr-FR">Français</option>
            </select>
            <button className="btn btn-success"disabled={isSubmitting} >Submit</button>
        </form>
       )}
       </Formik>
      )
  }
}
