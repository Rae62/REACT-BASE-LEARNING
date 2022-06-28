export default (props) => {
  return (
    <div className="w-25 border p-4 d-flex flex-column">
      <h5 className="text-center text-danger">{props.serie.title}</h5>
      <hr className="w-100" />
      <img src={props.serie.img} alt="" className="imgDetail" />
      <span className="text-secondary"></span>
      <p className="text-success">{props.serie.description}</p>
    </div>
  )
}


