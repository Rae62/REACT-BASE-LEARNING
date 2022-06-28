export default (props) => {
    console.log(props);
        return(
            <div className="w-25 border p-4 d-flex flex-column">
                <h5 className="text-center text-danger">{ props.serie.title}</h5>
                <hr className="w-100" />
                <img src={props.serie.img } alt="" className="imgDetail" />
                <hr className="w-100" />
                <span className="text-secondary">{props.serie.details }</span>
                <p className="text-dark">{props.serie.description }</p>
            </div>
        )
}