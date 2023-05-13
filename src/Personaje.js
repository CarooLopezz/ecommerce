const Personaje = (props)=> {
    return(
      <div className="col.lg-4">
      <div className="text-center card box">
      <div className="member-card pt-2 pb-2">
      <div className="thumb-lg member-thumb mx-auto">
    <img src={props.img} className="rounded-circle img-thumbnail" width="400px" height="400px" alt="pimage"/>
   </div>
   <div className ="name">
    <h3>{props.name}</h3>
    <p className="text-muted">{props.job}</p>
    </div>
   </div>
   </div>
   </div>
   
    )
}
export default Personaje;