
import { Redirect } from 'react-router-dom';




const  Composant1 = (props) => {
    console.log(props);
    const params=new URLSearchParams(props.location.search)
    console.log(params.get('query'))
    console.log(params.get('language'))
    const isLoggedIn = props.isLoggedIn ? props.isLoggedIn : false


    return(
        <div>
            {
                isLoggedIn ? (
                    <h1>Composant 1 </h1>

                ) : (
                    <Redirect to='/2'/>
                )
            }
        </div>
    )
}

export default Composant1;